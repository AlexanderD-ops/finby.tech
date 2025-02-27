using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Telegram.Bot;
using Telegram.Bot.Polling;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;
using TelegramBot.Commands.Implementation;
using TelegramBot.Configuration;
using TelegramBot.Services.Abstraction;
using TelegramBot.Services.Implemintation;


namespace TelegramBot
{
    public class Program
    {
        private static ITelegramBotClient botClient;
        private static IServiceProvider serviceProvider;

        public static async Task Main()
        {
            var serviceCollection = new ServiceCollection();
            ConfigureServices(serviceCollection);
            serviceProvider = serviceCollection.BuildServiceProvider();

            var botConfiguration = serviceProvider.GetRequiredService<BotConfiguration>();
            botClient = new TelegramBotClient(botConfiguration.BotToken);

            var me = await botClient.GetMe();
            Console.WriteLine($"Hello, World! I am bot {me.Id} and my name is {me.FirstName}.");

            using var cts = new CancellationTokenSource();

            var receiverOptions = new ReceiverOptions
            {
                AllowedUpdates = Array.Empty<UpdateType>()
            };

            botClient.StartReceiving(
                HandleUpdateAsync,
                HandleErrorAsync,
                receiverOptions,
                cancellationToken: cts.Token
            );

            Console.WriteLine("Press any key to exit");
            Console.ReadKey();

            cts.Cancel();
        }

        private static async Task HandleUpdateAsync(ITelegramBotClient botClient, Update update, CancellationToken cancellationToken)
        {
            if (update.Type == UpdateType.Message && update.Message!.Type == MessageType.Text)
            {
                //var chatId = update.Message.Chat.Id;
                //var messageText = update.Message.Text;
                //Console.WriteLine($"Received a '{messageText}' message in chat {chatId}.");
                var commandHandlerRegistry = serviceProvider.GetRequiredService<CommandHandlerRegistry>();
                await commandHandlerRegistry.HandleCommandAsync(botClient, update.Message, cancellationToken);
            }
        }

        private static Task HandleErrorAsync(ITelegramBotClient botClient, Exception exception, CancellationToken cancellationToken)
        {
            Console.WriteLine(exception);
            return Task.CompletedTask;
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();

            var botConfiguration = new BotConfiguration();
            configuration.GetSection("BotConfiguration").Bind(botConfiguration);

            //services.AddDbContext<BotDbContext>(options =>
            //    options.UseSqlServer("YourConnectionStringHere"));
            services.AddSingleton(botConfiguration);
            services.AddTransient<IDefaultInfoService, DefaultInfoService>();
            services.AddTransient<InfoCommandHandler>();
            services.AddTransient<AssetsCommandHandler>();
            services.AddTransient<StartCommandHandler>();
            services.AddTransient<AskCommandHandler>();
            services.AddTransient<FeedbackCommandHandler>();
            services.AddSingleton<CommandHandlerRegistry>();

            // Register command handlers
            services.AddSingleton(provider =>
            {
                var registry = new CommandHandlerRegistry();
                registry.Register("/info", provider.GetRequiredService<InfoCommandHandler>());
                registry.Register("/assets", provider.GetRequiredService<AssetsCommandHandler>());
                registry.Register("/start", provider.GetRequiredService<StartCommandHandler>());
                registry.Register("/ask", provider.GetRequiredService<AskCommandHandler>());
                registry.Register("/feedback", provider.GetRequiredService<FeedbackCommandHandler>());
                return registry;
            });
        }
    }
}

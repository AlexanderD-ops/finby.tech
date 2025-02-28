using Telegram.Bot.Types;
using Telegram.Bot;
using TelegramBot.Services.Abstraction;

namespace TelegramBot.Commands.Implementation
{
    public class InfoCommandHandler : ICommandHandler
    {
        private readonly IDefaultInfoService _userService;

        public InfoCommandHandler(IDefaultInfoService userService)
        {
            _userService = userService;
        }

        public async Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            await botClient.SendMessage(
                chatId: message.Chat.Id,
                text: "Мы предоставляем услуги по гарантиям, залогам и страхованию. Узнайте больше с помощью других команд.",
                cancellationToken: cancellationToken
            );
        }
    }
}

using Telegram.Bot;
using Telegram.Bot.Types;
using TelegramBot.Commands;
using TelegramBot.Commands.Implementation;

public class CommandHandlerRegistry
{
    private readonly Dictionary<string, ICommandHandler> _handlers = new Dictionary<string, ICommandHandler>();

    public void Register(string command, ICommandHandler handler)
    {
        _handlers[command] = handler;
    }

    public async Task HandleCommandAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
    {
        if (message.Text != null && _handlers.TryGetValue(message.Text, out var handler))
        {
            await handler.HandleAsync(botClient, message, cancellationToken);
        }
        else
        {
            await AskCommandHandler.HandleResponseAsync(botClient, message, cancellationToken);
            await FeedbackCommandHandler.HandleFeedbackAsync(botClient, message, cancellationToken);
        }
    }
}
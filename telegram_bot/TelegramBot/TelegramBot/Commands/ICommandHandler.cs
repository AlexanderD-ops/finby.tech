using Telegram.Bot;
using Telegram.Bot.Types;

namespace TelegramBot.Commands
{
    public interface ICommandHandler
    {
        Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken);
    }
}

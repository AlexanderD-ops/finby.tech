using Telegram.Bot.Types;

namespace TelegramBot.Services.Abstraction
{
    public interface IDefaultInfoService
    {
        Task GetInfo(Message message);
        Task GetAssets(Message message);
        Task GetStart(Message message);
    }
}

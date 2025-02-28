using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot.Types;
using TelegramBot.Services.Abstraction;

namespace TelegramBot.Services.Implemintation
{
    public class DefaultInfoService : IDefaultInfoService
    {
        public Task GetAssets(Message message)
        {
            throw new NotImplementedException();
        }

        public Task GetInfo(Message message)
        {
            throw new NotImplementedException();
        }

        public Task GetStart(Message message)
        {
            throw new NotImplementedException();
        }
    }
}

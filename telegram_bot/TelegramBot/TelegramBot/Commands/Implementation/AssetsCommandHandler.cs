using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;

namespace TelegramBot.Commands.Implementation
{
    public class AssetsCommandHandler : ICommandHandler
    {
        public async Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            await botClient.SendMessage(
                chatId: message.Chat.Id,
                text: "Здесь будет информация по активам.",
                cancellationToken: cancellationToken
            );
        }
    }
}

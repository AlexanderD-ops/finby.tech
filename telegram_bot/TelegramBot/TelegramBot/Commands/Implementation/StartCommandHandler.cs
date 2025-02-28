using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot;
using Telegram.Bot.Types;

namespace TelegramBot.Commands.Implementation
{
    public class StartCommandHandler : ICommandHandler
    {
        public async Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            await botClient.SendMessage(
                chatId: message.Chat.Id,
                text: $"Привет, {message.Chat.Username}! Я ваш финансовый бот. Используйте /info для получения информации.",
                cancellationToken: cancellationToken
            );
        }
    }
}

using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telegram.Bot.Types;
using Telegram.Bot;

namespace TelegramBot.Commands.Implementation
{
    public class AskCommandHandler : ICommandHandler
    {
        private static readonly ConcurrentDictionary<long, bool> WaitingForResponse = new ConcurrentDictionary<long, bool>();

        public async Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            var chatId = message.Chat.Id;
            WaitingForResponse[chatId] = true;

            await botClient.SendMessage(
                chatId: chatId,
                text: "Задайте ваш вопрос:",
                cancellationToken: cancellationToken
            );
        }

        public static async Task HandleResponseAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            var chatId = message.Chat.Id;

            if (WaitingForResponse.TryRemove(chatId, out _))
            {
                await botClient.SendMessage(
                    chatId: chatId,
                    text: "Ok!",
                    cancellationToken: cancellationToken
                );
            }
        }
    }
}

using System.Collections.Concurrent;
using Telegram.Bot.Types;
using Telegram.Bot;

namespace TelegramBot.Commands.Implementation
{
    public class FeedbackCommandHandler : ICommandHandler
    {
        private static readonly ConcurrentDictionary<long, bool> WaitingForFeedback = new ConcurrentDictionary<long, bool>();

        public async Task HandleAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            var chatId = message.Chat.Id;
            WaitingForFeedback[chatId] = true;

            await botClient.SendMessage(
                chatId: chatId,
                text: "Напишите ваш отзыв:",
                cancellationToken: cancellationToken
            );
        }

        public static async Task HandleFeedbackAsync(ITelegramBotClient botClient, Message message, CancellationToken cancellationToken)
        {
            var chatId = message.Chat.Id;

            if (WaitingForFeedback.TryRemove(chatId, out _))
            {
                await botClient.SendMessage(
                    chatId: chatId,
                    text: "Feedback!",
                    cancellationToken: cancellationToken
                );
            }
        }
    }
}

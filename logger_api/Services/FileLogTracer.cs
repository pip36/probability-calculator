using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace logger_api.Services
{
    public class FileLogTracer : ILogTraceService
    {
        public async Task LogCalculation(string calculationType, IEnumerable<decimal> inputs, decimal result)
        {
            var line = JsonSerializer.Serialize(new
            {
                Time = DateTime.UtcNow,
                Type = calculationType,
                Inputs = string.Join(',', inputs),
                Result = result
            });

            await File.AppendAllLinesAsync("./temp/log-out.txt", new List<string> { line });
        }
    }
}
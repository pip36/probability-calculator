using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace Api.Services
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

            FileInfo file = new FileInfo("./temp/log-out.txt");
            file.Directory.Create();
            await File.AppendAllLinesAsync(file.FullName, new List<string> { line });
        }
    }
}
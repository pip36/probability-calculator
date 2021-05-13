using Api;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using Xunit;

namespace Tests
{
    public class LogTraceControllerTests : IClassFixture<WebApplicationFactory<Api.Startup>>
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public LogTraceControllerTests(WebApplicationFactory<Api.Startup> factory)
        {
            _factory = factory;
            File.Delete("./temp/log-out.txt");
        }

        [Fact]
        public async void LogsInputToFile()
        {
            var client = _factory.CreateClient();

            var requestBody = new StringContent(
                "{ \"calculationType\":\"combined\", \"inputs\":[0.1,0.2], \"result\":1.0}",
                Encoding.UTF8,
                "application/json");

            var response = await client.PostAsync("/logTrace", requestBody);
            response.EnsureSuccessStatusCode();

            var lines = await File.ReadAllLinesAsync("./temp/log-out.txt", Encoding.UTF8);
            Assert.Single(lines);

            var firstLine = lines.First();
            Assert.Contains("0.1,0.2", firstLine);
            Assert.Contains("1.0", firstLine);
            Assert.Contains("combined", firstLine);
        }
    }
}

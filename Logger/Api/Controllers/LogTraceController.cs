using System.Threading.Tasks;
using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LogTraceController : ControllerBase
    {
        private readonly ILogger<LogTraceController> _logger;
        private readonly ILogTraceService _logTraceService;

        public LogTraceController(ILogger<LogTraceController> logger, ILogTraceService logTraceService)
        {
            _logger = logger;
            _logTraceService = logTraceService;
        }

        [HttpPost]
        public async Task<IActionResult> Get([FromBody] LogTraceBody body)
        {
            await _logTraceService.LogCalculation(body.CalculationType, body.Inputs, body.Result);

            return Ok();
        }
    }
}

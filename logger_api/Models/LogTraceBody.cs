using System.Collections.Generic;

namespace logger_api.Models
{
    public class LogTraceBody
    {
        public string CalculationType { get; set; }

        public IEnumerable<decimal> Inputs { get; set; }

        public decimal Result { get; set; }
    }
}

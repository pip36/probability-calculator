using System.Collections.Generic;

namespace Api.Models
{
    public class LogTraceBody
    {
        public string CalculationType { get; set; }

        public IEnumerable<decimal> Inputs { get; set; }

        public decimal Result { get; set; }
    }
}

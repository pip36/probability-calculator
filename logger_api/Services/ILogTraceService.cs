using System.Collections.Generic;
using System.Threading.Tasks;

namespace logger_api.Services
{
    public interface ILogTraceService
    {
        Task LogCalculation(string calculationType, IEnumerable<decimal> inputs, decimal result);
    }
}
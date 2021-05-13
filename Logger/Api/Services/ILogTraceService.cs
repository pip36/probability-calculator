using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Services
{
    public interface ILogTraceService
    {
        Task LogCalculation(string calculationType, IEnumerable<decimal> inputs, decimal result);
    }
}
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace roll_move_functions
{
    public static class Function1
    {

        [FunctionName("games")]
        public static async Task<IActionResult> GetGames(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post", "options", Route = null)] HttpRequest req,
    ILogger log)
        {
            req.HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            req.HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            req.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
            log.LogInformation("C# HTTP trigger function processed a request.");

            // Sample response data
            var response = new { message = "Hello from Azure Functions!", name = "Board game 1" };
            return new OkObjectResult(response);
        }
    }

}

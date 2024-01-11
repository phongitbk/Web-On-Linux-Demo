using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebOnLinuxDemoAPI.Controllers
{
  [ApiController]
  [Route("[controller]/[action]")]
  public class WeatherForecastController : ControllerBase
  {
    private readonly DemoDbContext _context;

    public WeatherForecastController(DemoDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
      var list = await _context.WeatherForecasts.ToListAsync();
      return Ok(list);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] WeatherForecast request)
    {
      _context.WeatherForecasts.Add(request);
      await _context.SaveChangesAsync();
      return Ok();
    }
  }
}

using Microsoft.EntityFrameworkCore;

namespace WebOnLinuxDemoAPI
{
  public class DemoDbContext: DbContext
  {
    public DbSet<WeatherForecast> WeatherForecasts { get; set; }

	public DemoDbContext(DbContextOptions<DemoDbContext> options)
        : base(options)
    {
    }
  }
}

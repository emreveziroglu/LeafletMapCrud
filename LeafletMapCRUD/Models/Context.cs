using Microsoft.EntityFrameworkCore;

namespace LeafletMapCRUD.Models
{
    public class Context : DbContext
    {

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(@"server=localhost; database=LeafletMap; Trusted_Connection=True;");
        //}
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Map> Maps { get; set; }
    }
}

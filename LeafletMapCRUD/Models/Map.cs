using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeafletMapCRUD.Models
{
    public class Map
    {
        [Key]

        public long Id { get; set; }
        public string Title { get; set; }
        public string LocationName { get; set; }
        public string LatutateLong { get; set; }
        public string LatutateLang { get; set; }
    }
}

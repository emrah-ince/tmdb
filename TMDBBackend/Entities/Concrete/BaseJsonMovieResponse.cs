using Core.Entities;
using System.Collections.Generic;

namespace Entities.Concrete
{
    public class BaseJsonMovieResponse<TResult>: IEntity
    {
        public int id { get; set; }
        public int page { get; set; }
        public List<TResult> results { get; set; }
        public int total_pages { get; set; }
        public int total_results { get; set; }
    }
}

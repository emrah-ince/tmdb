using Entities.Concrete;

namespace DataAccess.Abstract
{
    public interface IPopularMovieDal
    {
        BaseJsonMovieResponse<PopularMovie> GetbyPage(int pageid);
        BaseJsonMovieResponse<PopularMovie> GetbyQuery(string query);
    }
}


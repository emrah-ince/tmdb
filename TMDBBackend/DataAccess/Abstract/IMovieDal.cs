using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface IMovieDal
    {
        BaseJsonMovieResponse<PopularMovie> GetbyPage(int pageid , string query);
        BaseJsonMovieResponse<PopularMovie> GetbyQuery(string query);
    }
}

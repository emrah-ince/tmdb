using Core.Utilities.Results;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IMovieService
    {
        IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyPage(int pageid ,string query);
        IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyQuery(string query);
    }
}

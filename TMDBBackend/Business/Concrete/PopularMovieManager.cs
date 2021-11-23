using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class PopularMovieManager : IPopularMovieService
    {
        private IPopularMovieDal _popularMovieDal;

        public PopularMovieManager(IPopularMovieDal popularMovieDal)
        {
            _popularMovieDal = popularMovieDal;
        }

        public IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyPage(int pageid)
        {
            return new SuccessDataResult<BaseJsonMovieResponse<PopularMovie>>(_popularMovieDal.GetbyPage(pageid));
        }

        public IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyQuery(string query)
        {
            return new SuccessDataResult<BaseJsonMovieResponse<PopularMovie>>(_popularMovieDal.GetbyQuery(query));
        }
    }
}

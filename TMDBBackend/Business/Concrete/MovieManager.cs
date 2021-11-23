using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class MovieManager : IMovieService
    {
        private IMovieDal _movieDal;
        public MovieManager(IMovieDal movieDal)
        {
            _movieDal = movieDal;
        }

        public IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyPage(int pageid , string query)
        {
            return new SuccessDataResult<BaseJsonMovieResponse<PopularMovie>>(_movieDal.GetbyPage(pageid , query));
        }

        public IDataResult<BaseJsonMovieResponse<PopularMovie>> GetbyQuery(string query)
        {
            return new SuccessDataResult<BaseJsonMovieResponse<PopularMovie>>(_movieDal.GetbyQuery(query));
        }
    }
}

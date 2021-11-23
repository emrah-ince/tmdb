using DataAccess.Abstract;
using Entities.Concrete;
using Newtonsoft.Json;
using System.Net;

namespace DataAccess.Concrete
{
    public class EfPopularMovieDal : IPopularMovieDal
    {
        private string _apiKey = "5abd992f12f33b0d0efb1dd649141f3c";
        public BaseJsonMovieResponse<PopularMovie> GetbyPage(int pageid)
        {
            string json = string.Empty;
            using (WebClient webClient = new WebClient())
            {
                json = webClient.DownloadString($"https://api.themoviedb.org/3/movie/popular?api_key={_apiKey}&language=en-US&page={pageid}");
            }

            var popularMovies = JsonConvert.DeserializeObject<BaseJsonMovieResponse<PopularMovie>>(json);

            return popularMovies;
        }

        public BaseJsonMovieResponse<PopularMovie> GetbyQuery(string query)
        {

            string json = string.Empty;
            using (WebClient webClient = new WebClient())
            {
                var url = $"https://api.themoviedb.org/3/movie/popular?api_key={_apiKey}";
                if (!string.IsNullOrEmpty(query))
                {
                    url = url + "&query=" + query;
                }
                json = webClient.DownloadString(url);
            }

            var popularMovies = JsonConvert.DeserializeObject<BaseJsonMovieResponse<PopularMovie>>(json);

            return popularMovies;
        }


    }
}

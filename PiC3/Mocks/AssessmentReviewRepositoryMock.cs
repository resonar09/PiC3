using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PiC3.Dtos;
using PiC3.Models;
using PiC3.Repository;

namespace PiC3.Mocks
{
    public class AssessmentReviewRepositoryMock : IAssessmentReviewRepository
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        public AssessmentReviewRepositoryMock(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;

        }

        public async Task<IEnumerable<AssessmentReviewDto>> GetAssessmentReviews(int id)
        {
            string contenRootPath = _hostingEnvironment.ContentRootPath;
            var JSON = await System.IO.File.ReadAllTextAsync(contenRootPath + "/data/clientAssessments.json");
            return JsonConvert.DeserializeObject<IEnumerable<AssessmentReviewDto>>(JSON);
        }

        public async Task<IEnumerable<AssessmentReviewDto>> GetAssessmentsByStatus(int id)
        //public async Task<IEnumerable<AssessmentReviewDto>> GetAssessmentsByStatus(int id)
        {
            string contenRootPath = _hostingEnvironment.ContentRootPath;
            var JSON = await System.IO.File.ReadAllTextAsync(contenRootPath + "/data/clientAssessments.json");
            return JsonConvert.DeserializeObject<IEnumerable<AssessmentReviewDto>>(JSON);
        }

        public async Task<bool> IsAlive()
        {
            CoreServiceDevReference.CoreServiceClient coreServiceClient = new CoreServiceDevReference.CoreServiceClient();
            try
            {
                await coreServiceClient.HelloWorldAsync();
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }

        }

    }
}
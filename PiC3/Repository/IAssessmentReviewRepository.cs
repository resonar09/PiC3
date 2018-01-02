using System.Collections.Generic;
using System.Threading.Tasks;
using PiC3.Dtos;

namespace PiC3.Repository
{
    public interface IAssessmentReviewRepository
    {
         Task<IEnumerable<AssessmentReviewDto>> GetAssessmentsByStatus(int id);
    }
}
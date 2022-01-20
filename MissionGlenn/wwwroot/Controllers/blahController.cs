using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MissionGlenn.wwwroot.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult FanMail()
        {
            return View();
        }
    }
}

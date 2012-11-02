using System.Web;
using System.Web.Optimization;

namespace InfoDash
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.gridster.min.js",
                        "~/Scripts/knockout-2.2.0.js",
                        "~/Scripts/jquery.leanModal.js",
                        "~/Scripts/application.js"
            ));

            bundles.Add(new StyleBundle("~/bundles/css").Include("~/Content/Site.css", "~/Content/font-awesome.css", "~/Content/jquery.gridster.min.css"));

            bundles.Add(new StyleBundle("~/bundles/widgets-css").IncludeDirectory("~/Widgets", "*.css", true));
            bundles.Add(new ScriptBundle("~/bundles/widgets-js").IncludeDirectory("~/Widgets", "*.js", true));

        }
    }
}
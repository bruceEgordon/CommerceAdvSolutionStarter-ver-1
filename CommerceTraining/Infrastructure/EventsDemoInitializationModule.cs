using System;
using System.Linq;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;

namespace CommerceTraining.Infrastructure
{
    [InitializableModule]
    [ModuleDependency(typeof(EPiServer.Web.InitializationModule))]
    public class EventsDemoInitializationModule : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            //Add initialization logic, this method is called once after CMS has been initialized
        }

        public void Uninitialize(InitializationEngine context)
        {
            //Add uninitialization logic
        }
    }
}
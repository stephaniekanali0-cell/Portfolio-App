// Definging a list containing the different lists used for navigation//

const navlinks =[
   // The object for the links will have two things a href and a label.//

   {href: "#about", label:"About"},
   {href: "#projects", label:"Projects"},
   {href: "#experience", label:"Experience"},
   {href: "#testimonials", label:"Testimonials"},
];

export const navbar = () =>
   { return
    <header>

      {/* To Bring the layout of the navbar */}

      <nav>

       {/* Logo */}

        <a>
         SKLA<span>.</span> 
        </a>
        {/* Desktop Nav */}
        <div>
           <div>
{/* Take the Lists loop through them to show each link.Render an a tag to allow it to be a link */}
             {navlinks.map((link) => (<a href={link.href}>{link.label}</a>))}
           </div>
        </div>


      </nav>


    </header>}
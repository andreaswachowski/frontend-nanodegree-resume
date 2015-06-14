var skills = ["Ruby on Rails", "JavaScript", "Objective-C/Swift", "C++", "Scrum", "Kanban", "General Management" ];

var bio = { "name": "Andreas Wachowski",
  "role": "Solutions in Software",
  "contacts": {
    "mobile": "---",
    "email": "&lt;firstname&gt;.&lt;lastname&gt;@gmail.com",
    "github": "andreaswachowski",
    "twitter": "awachowski",
    "location": "Hamburg"
  },
  "bioPic": "images/avatar_175x175.png",
  "welcomeMsg": "Web and iOS applications. Software Development Management.",
  "skills": skills
};

var work = {
  "jobs": [
    {
      "employer": "XING Events GmbH",
      "title": "VP Technology",
      "dates": "10/2012&ndash;2014",
      "location": "Munich",
      "description": "Responsible for leading the technology (software development, IT, QA, project management) of XING Events GmbH."
    },
    {
      "employer": "XING AG",
      "title": "Director QA",
      "dates": "01/2008&ndash;10/2012",
      "location": "Hamburg",
      "description": "Built XING's software quality assurance team from scratch to 25 employees."
    },
    {
      "employer": "XING AG",
      "title": "Manager Engineering",
      "dates": "01/2007&ndash;12/2007",
      "location": "Hamburg",
      "description": "Ruby on Rails Development. One of the first developers at XING, participated in the build and launch of the XING marketplace (now known as the jobs functionality)."
    },
    {
      "employer": "Reuters AG / Odyssey Asset Management Systems",
      "title": "Lead Software Engineer",
      "dates": "04/2002&ndash;12/2006",
      "location": "Hamburg",
      "description": "Development on a portfolio management system. Primarily C++. Also Java, DocBook, Solaris."
    },
    {
      "employer": "Morgan Stanley",
      "title": "Associate, Technology Division",
      "dates": "01/2001&ndash;01/2002",
      "location": "London, UK",
      "description": "Software development on a securities lending platform. Primarily C++. Also Perl, VBA, Solaris."
    },
    {
      "employer": "Morgan Stanley",
      "title": "Associate, Technology Division",
      "dates": "08/2000&ndash;12/2000",
      "location": "New York, NY",
      "description": "Corporate trainee program. Industrial-strength C++, Java, Perl, UNIX, etc. According to the trainers, one of the top 5 trainees (of approx. 30) in the distributed systems track."
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "HECTOR School of Engineering and Management",
      "location": "Karlsruhe",
      "degree": "M. Sc.",
      "major": ["Information Engineering"],
      "dates": "09/2008&ndash;05/2010"
    },
    {
      "name": "Universität Karlsruhe (TH)",
      "location": "Karlsruhe",
      "degree": "Dipl.-Inform.",
      "major": ["Computer Science"],
      "minor": ["Software Engineering"],
      "dates": "10/1997&ndash;05/2000",
      "description": "Joint degree with ENSIMAG. Universität Karlsruhe (TH) has since renamed itself to Karlsruhe Institute of Technology (KIT)"
    },
    {
      "name": "ENSIMAG",
      "location": "Grenoble, France",
      "degree": "Diplôme d'Ingénieur, M. Sc.",
      "major": ["Computer Science"],
      "minor": ["Software Engineering"],
      "dates": "10/1997&ndash;05/2000",
      "description": "Joint degree with Universität Karlsruhe (TH)"
    },
    {
      "name": "University of Northern Colorado",
      "location": "Greeley, CO",
      "major": ["Computer Science"],
      "dates": "08/1996&ndash;09/1997",
      "description": "Exchange year. Computer science and speech communication."
    },
    {
      "name": "Carl-von-Ossietzky Universität Oldenburg",
      "location": "Oldenburg",
      "major": ["Computer Science"],
      "minor": ["Mathematics"],
      "dates": "10/1994&ndash;07/1996",
      "description": "'Vordiplom' in computer science, minor mathematics."
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "05/2015",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title": "Intro to jQuery",
      "school": "Udacity",
      "dates": "05/2015",
      "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
    },
   /*{
      "title": "Text Mining and Analytics",
      "school": "Coursera",
      "dates": "2015-06-08&ndash;",
      "certificateUrl": "TBD",
      "url": "https://www.coursera.org/course/textanalytics"
    },*/
    {
      "title": "Cluster Analysis in Data Mining",
      "school": "Coursera",
      "dates": "2015-04-27&ndash;2015-06-04",
      "certificateUrl": "https://www.coursera.org/account/accomplishments/records/k2zD2Wu9H4usaFkK",
      "url": "https://www.coursera.org/course/clusteranalysis"
    },
    {
      "title": "Text Retrieval and Search Engines",
      "school": "Coursera",
      "dates": "2015-0-169&ndash;2015-04-19",
      "certificateUrl": "https://www.coursera.org/account/accomplishments/records/rAAdVPCRPa2XMPvn",
      "url": "https://www.coursera.org/course/textretrieval"
    },
    {
      "title": "Pattern Discovery in Data Mining",
      "school": "Coursera",
      "dates": "2015-02-09&ndash;2015-03-19",
      "certificateUrl": "https://www.coursera.org/account/accomplishments/records/mw9AGZSBVWVuKpy3",
      "url": "https://www.coursera.org/course/patterndiscovery"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "This CV",
      "dates": "2015-05",
      "description": "A sample HTML page as part of the Udacity front-end web developer nano degree to get a feel for Javascript, jQuery, and responsive design."
    },
    {
      "title": "Blender bathroom visualization",
      "dates": "2015-01",
      "description": "Learned some 3d modelling with Blender. The most challenging part was to learn how to keep the project maintainable with many objects and many scenes for the same room: The furniture objects etc. each modelled in a separate file. They were aggregated in another file containing all scenes for one specific room. In turn, each scene included the same general groups like 'room', 'electricity', 'furniture', etc. The distinctive element of a scene was usually just a different camera configuration. In addition, a 'wip' (work in progress) scene which acted as the actual working area, but didn't participate in the final render. Adding an object involved adding a link to the room file, initially to the 'wip' scene, and then adding it to the corresponding group. Whenever the object was moved or changed, it was hence updated automatically throughout all render scenes.",
      "thumbnails": [ "images/bad_blick_von_decke_small.jpg", "images/wc_blick_von_tuer_schraeg_rechts_small.jpg" ],
      // images are optional and, if present, will result in allowing the
      // thumbnails to be clicked upon, showing an enlarged version of it.
      // The order of images *must* correspond to the order of thumbnails
      // Each image entry consists of
      // - the filename
      // - the title for the modal. Will also be used as image alt-tag
      // - the HTML id for the modal
      // - optionally a caption displayed in a paragraph below the image
      // TODO: Use associative array instead of relying on hardcoded order.
      "images": [ [ "images/bad_blick_von_decke_large.jpg",
                    "Top view into a bathroom",
                    "bad_blick_von_decke",
                    "It took a while to get the lighting appropriate."
                  ],
                  [ "images/wc_blick_von_tuer_schraeg_rechts_large.jpg",
                    "A different bathroom",
                    "wc_blick_von_tuer_schraeg_rechts",
                    "Positioning the camera such that vertical lines remain vertical, while still showing enough is challenging. As I have understood now, it's often a beginner's mistake to try to include too much in one image. Architectural renders often work better when constraining themselves to details. (see <a class='inline' href='https://www.youtube.com/watch?v=GQM7FNjGAHA'>Andrew Price\'s 13 deadly Sins of Architectural Rendering (YouTube)</a>)"
                  ]
      ]
    }
  ]
};

bio.display = function () {
  'use strict';
  $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
  $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
  $('#header').append(HTMLbioPic.replace('%data%',bio.bioPic));
  if (bio.welcomeMsg) $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMsg));
  var contactsInfo = '';
  if (bio.contacts.twitter) contactsInfo += HTMLtwitter.replace('%data%',bio.contacts.twitter);
  if (bio.contacts.github) contactsInfo += HTMLgithub.replace('%data%',bio.contacts.github);
  if (bio.contacts.email) contactsInfo += HTMLemail.replace('%data%',bio.contacts.email);
  if (bio.contacts.blog) contactsInfo += HTMLblog.replace('%data%',bio.contacts.blog);
  if (bio.contacts.location) contactsInfo += HTMLlocation.replace('%data%',bio.contacts.location);

  $('#topContacts').append(contactsInfo);
  $('#footerContacts').append(contactsInfo);

  if (bio.skills && bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var numberOfSkills=bio.skills.length;
    for (var idx=0;idx<numberOfSkills;idx++) {
      $('#skills').append(HTMLskills.replace('%data%',bio.skills[idx]));
    }
  }
};

work.display = function () {
  'use strict';
  var numberOfJobs=work.jobs.length;
  for (var jobIdx=0;jobIdx<numberOfJobs;jobIdx++) {
    var job=work.jobs[jobIdx];
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer=HTMLworkEmployer.replace('%data%',job.employer);
    var formattedTitle=HTMLworkTitle.replace('%data%',job.title);
    var formattedLocation=HTMLworkLocation.replace('%data%',job.location);
    var formattedDates=HTMLworkDates.replace('%data%',job.dates);
    var formattedDescription=HTMLworkDescription.replace('%data%',job.description);

    $('.work-entry:last').append(
      formattedEmployer + formattedTitle +
      formattedLocation + formattedDates +
      formattedDescription);
  }
};

projects.display = function() {
  'use strict';
  for (var idx in projects.projects) {
    var project=projects.projects[idx];
    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
    $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
    $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
    if (project.thumbnails && project.thumbnails.length > 0) {
      for (var imageIdx in project.thumbnails) {
        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.thumbnails[imageIdx]));
        if (project.images[imageIdx]) {
          var image=project.images[imageIdx];
          var thumbnail = $('.project-entry:last').find('img:last');
          thumbnail.attr('data-toggle','modal');
          thumbnail.attr('data-target','#' + image[2]);
          var modal = HTMLimageModal.replace(/%filename%/g, image[0]).replace(/%title%/g,image[1]).replace(/%id%/g, image[2]).replace('%description%', image[3]);
          $(modal).insertAfter('#main');
        }
      }
    }
  }
};

education.display = function() {
  'use strict';
  for (var schoolIdx in education.schools) {
    var school=education.schools[schoolIdx];
    $('#education').append(HTMLschoolStart);
    if (school.name && school.degree) {
      $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
    } else if (school.name) {
      $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name) + '</a>');
    }
    $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
    $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
    $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.major));
    if (school.description) {
      $('.education-entry:last').append(HTMLschoolDescription.replace('%data%', school.description));
    }
  }
  if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLonlineClassStart);
  }
  for (var courseIdx in education.onlineCourses) {
    var course = education.onlineCourses[courseIdx];
    $('.education-entry:last').append(HTMLonlineTitle.replace('%data%',course.title) + HTMLonlineSchool.replace('%data%',course.school));
    $('.education-entry:last').append(HTMLonlineDates.replace('%data%',course.dates));
    $('.education-entry:last').append(HTMLonlineURL.replace(/%data%/g,course.url));
    if (course.certificateUrl) {
      $('.education-entry:last').append(HTMLcertificateURL.replace(/%data%/g,course.certificateUrl));
    }
  }
};

function locationizer() {
    'use strict';
    var locations = [];
    for (var idx in work.jobs) {
      locations.push(work.jobs[idx].location);
    }
    return locations;
}

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);

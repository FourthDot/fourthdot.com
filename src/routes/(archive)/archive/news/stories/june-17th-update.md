---
title: 'June 17th Update'
date: '2022-06-17'
category: 'Updates'
description: 'Since our last update we have been hard at work researching, refining and developing the NoteBook application and associated marketing campaigns. We are currently on pace with our product development roadmap and are developing the core technolgoreis of the application whilst also continually refining it’s interface. This approach allows us to continually refine and iterate quickly, which allows us to catch problems or see opportunities for improvement earlier on in the development cycle. With that in mind here is what we have been working on.'
published: 'true'
---

Since our last update we have been hard at work researching, refining and developing the NoteBook application and associated marketing campaigns. We are currently on pace with our product development roadmap and are developing the core technolgoreis of the application whilst also continually refining it's interface. This approach allows us to continually refine and iterate quickly, which allows us to catch problems or see opportunities for improvement earlier on in the development cycle. With that in mind here is what we have been working on.

## Feature Set

One of the most important activities this week was to define a feature set for the application. This gives us clear goals for development and allows marketing to be developed alongside the product. Here is a list of features that we are currently planning to ship in the 1.0 release of NoteBook.

- Rich Text Editing: text formatting, bulleted and numbered lists, and curated typographic styles.
- Sketching: pencil, pen, marker, smart lasso selection, and handwriting recognition.
- Media: add photos, interactive 3D content, and audio recordings.
- Diagrams: text filled shapes, directional arrows, and nesting of objects.
- Tables: text formatting, basic equations, and ability to link to charts.Charts: use table data to create bar and line graphs. *(will be released with iOS 16, iPadOS 16 and macOS Ventura in the fall)*

## Page Container Development

One of the main goals for the week from the development standpoint was to to develop a container for our page content. This container is what defines the size and aspect ratio of our document so it is critical to get it right to ensure that all of the content is scaled accurately. For instance let's say we want to create a document the size of a letter sheet of paper which is 8.5" wide by 11" tall. The unit for laying out content in Apple's view systems are points, which is a unit equal to 1/72 of an inch. This gives us a document size of 612pt by 792pt. It's important to note that a point does not equal pixel, which means that our view will not scale properly to our devices screen. Furthermore with a device that is smaller than a sheet of letter paper the content would be clipped. To solve this the view was embedded in a scrollview that allows the user to zoom in and out. To insure that the digital document is the correct size we created a scaled mockup with digital dimensions set in inches. We then printed the image and measures it with a ruler to verify our system was working correctly. As you can see below, it was in fact correct. This completes the first major component of the planned development work.

## Page Container Development

One of the main goals for the week from the development standpoint was to to develop a container for our page content. This container is what defines the size and aspect ratio of our document so it is critical to get it right to ensure that all of the content is scaled accurately. For instance let's say we want to create a document the size of a letter sheet of paper which is 8.5" wide by 11" tall. The unit for laying out content in Apple's view systems are points, which is a unit equal to 1/72 of an inch. This gives us a document size of 612pt by 792pt. It's important to note that a point does not equal pixel, which means that our view will not scale properly to our devices screen. Furthermore with a device that is smaller than a sheet of letter paper the content would be clipped. To solve this the view was embedded in a scrollview that allows the user to zoom in and out. To insure that the digital document is the correct size we created a scaled mockup with digital dimensions set in inches. We then printed the image and measures it with a ruler to verify our system was working correctly. As you can see below, it was in fact correct. This completes the first major component of the planned development work.

## Text Engine & TextKit 2

Last week at WWDC Apple announced the next phase in their rollout of the TextKit 2 Framework. They had previously announced that all their platforms would be moving to TextKit 2 last year at WWDC and this year they updated us on these plans and said that they are going to make TextKit 2 the default Text framework across all their platforms with the software updates coming this fall. With this in mind we have researched these changes and determined the best way to architect the text editing system. The results of this research are currently partially done being implemented. Below you can see the some basic text formatting being utilized.

## Goals for Next Week

With this first week of development behind us, we hope to carry this energy into the next week's development work. We are currently planning to work on the following:
- Continue Development on the Text editor by adding more formatting options.
- Research PencilKit to determine if it should be utilized for the core of the sketching aspect of the application.
- Design the user interface for the document organizer.
- Develop the system for adding and moving components within the page view
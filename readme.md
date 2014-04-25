# Chokaigi Streams

A site to easily display a list of all (as much as I know) streams from the annual ChoKaigi event. Quite a lot happening this year and I want to watch it all so I thought, "Hey let's make another one of those tracker thingys". So here we are.

If I have missed a stream then please let me know [@tomopagu](http://twitter.com/tomopagu) on twitter. 

## Thanks

A massive thanks to [@CasualStreamer](https://twitter.com/CasualStreamer) for the initial day 1 list. He'll probably be ripping most things so check his releases [here](http://www.nyaa.se/?user=130040) if you miss a stream and can't timeshift

## Workflow

1. Run `gulp` to initially compile the site. (May have to run twice)
2. Run `gulp watch` to watch files with livereload as you work.
3. Once done with your work, run `gulp build` to build the site with assets minified & compressed. This is placed in a folder called `/dist`. Go here and double-check the site works/looks as intended.

---
layout: post
title: "analysing chess databases with R (1)"
---

Are individuals more aggressive towards stronger or weaker opponents? I attempt to answer this question using a database of 121,332 games from [Lichess (an open-source chess server)](http://www.lichess.org). 

Background:
- Each player in chess has an rating that corresponds to their skill level, relative to others in the same rating pool. Lichess uses the Glicko 2 system to compute ratings, which is said to be an improvement over the Elo system. All players start with a rating of 1500 that can then increase after wins or decrease after losses.
- Chess games can be divided into opening, middlegame, and endgame. Players, particularly those at intermediate levels and above, tend have repertoires of openings (i.e., the starting moves of games that have been worked out to "optimality" by either expert chess players or computers). Such openings can range from 



WIP

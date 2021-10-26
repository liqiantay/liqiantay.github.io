---
layout: post
title: "chess for psych with R (1)"
---

Are individuals more aggressive towards stronger or weaker opponents during competition? I attempt to answer this question using 121,332 chess games from [Lichess (an open-source chess server)](http://www.lichess.org). 

Background:
- Each player in chess has an rating that corresponds to their skill level, relative to others in the same rating pool. Lichess uses the Glicko 2 system to compute ratings, which is said to be an improvement over the Elo system. All players start with a rating of 1500 that can then increase after wins or decrease after losses.
- Players, particularly those at intermediate levels and above, tend to also have repertoires of openings (i.e., the starting moves of games that have been worked out to "optimality" by either expert chess players or computers). Such openings can range from more to less agressive, with agressive options like the King's Gambit typically requiring players to sacrifice pieces in exchange for attack chances. See Figure 1 for an illustration.

WIP

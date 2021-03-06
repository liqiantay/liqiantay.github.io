---
layout: post
title:  "simulating collider bias"
---
Simulated some data for a WIP. As can be seen from the plot, partisan beliefs and outcomes are not associated if all datapoints are taken into account. However, conditional on the hospitalization collider, a positive, spurious relationship can be observed.  

![image](/assets/images/colliderplot11.png)

```
n = 1000
df <- tibble(x = rnorm(n),
   y = rnorm(n),
   c = - 0.7*y + 0.5*x + rnorm(n, sd=0.3),
   Hospitalization = ifelse(c > 1, "Yes", "No"))
plotcollider <- ggplot(df, aes(x = x, y = y, 
   color=Hospitalization,
   fill=Hospitalization)) +
   geom_point(size=1.82, alpha = 0.7) +
   geom_smooth(method = "lm", se = TRUE, 
   fullrange = FALSE, level = 0.95) +
   labs(x = "Partisan beliefs", y = "Outcomes") +
   theme_bw()+
   scale_color_grey(start = 0, end = .65)+ 
   scale_fill_manual(values = c("grey", "red"))
plotcollider 
```

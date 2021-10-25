---
layout: post
title:  "simulating collider bias"
---
Conditioning our analyses on a collider can bias results. Very interesting (but also worrisome!).
```R 
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
   theme_minimal()+
   theme_bw()+
   scale_color_grey(start = 0, end = .65)+ 
   scale_fill_manual(values = c("grey", "red"))
 plotcollider 
```
![image](/assets/images/colliderplot11.png)

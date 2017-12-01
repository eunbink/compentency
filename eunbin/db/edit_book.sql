update books 
set 
imgurl = $1,
imgpreview = $2, 
title =$3, 
author =$4, 
genre = $5, 
description = $6

select * from books

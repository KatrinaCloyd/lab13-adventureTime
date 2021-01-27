# TIME TO MAKE A PLAN

Haha! I Shrunk You! Adventure

You have been shrunk by your zany scientist dad and now you need to make it back home thorugh the treaterous back yard. 


SET DATA 
    -user data
        -name 
        -character 
        -id
        -health
        -food 
        -num of friends 
        -obstacles cleared 
    
    -obstacles (three of them)
    (rain, lawnmower, racoons, dog)
        -id: name
        -title: page header 
        -map: placement of link on page ?
        -image: main picture for page
        -story: text block for with qustion
        -choices [{ 3 for each obstacle 
            -id: choice name 
            -action: choice to show with radio btn
            -health: what each one does to user health 
            -snacks: what each one does to user food
        }, {}, {}]

Welcome Page 
    HTML 
    Style Header and Over all Page look
        -Place holder for user info in header 
        -Form for getting user choices and info 
            -name 
            -character 
            -id -auto
            -health -atuo
            -food -auto
            -obstacles cleared -auto
        -submit button 
    JS 
        -Gather info from submit button
            -create USER and save to LS 
            -redirect to Map Page 

Map page 
    HTML   
    Copy Style and Page feel from welcome 
        -Info / Stats in Header 
        -Welcome and base story 
        -Main Map Image 
        -links to the 3 obstacles 
        -only enable one at a time 
        -check off completed as they are done 

    JS 
        -get USER data from LS 
        -redirect to results if 
            -healthis <= 0
            -all obstacles are complete 
        -render to in user info to Header
        -render links to obstacles on page from data 
            -completed tasks should look different
            -completed tasks should be disabled 

OBSTACLE page (varies depending on current ob selection) 
    HTML 
    Copy Style and Page feel from welcome 
        -Info / Stats in Header 
        -place holder for: (or just a single div)
            -header 
            -image
            -story black 
            -choices
            -submit button

    JS 
        -get USER data from LS 
        -render to in user info to Header
        -get selected obstacle from URL
        -render obstacle to page 
            -header 
            -image
            -story black 
            -choices
            -submit button
            -form button listener 
                -up date user stats based on choice
                -set USER back to LS 
                -redirect back to map page 

RESULTS page 
    HTML 
    Copy Style and Page feel from welcome 
        -place holder for results text 
        -reset button 

    JS 
        -render results story 
        -render picture based on your results 
            -all dead
            -you died but your firends are still out there..
            -made it out with some dead friends 
            -all made it out alive! 
        -listener to button 
            -clear LS 
            -redirect to Welcome Page


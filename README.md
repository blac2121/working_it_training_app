## Title
Working It: Manage your training

## Description
Athletes improve through consistency, recovery, and continual challenges provided through their training protocol.  Working It provides a resource for athletes to not only log the important data about their workouts such as date, duration, and workout type, but also the ability to indicate whether the workout was sufficiently challenging, too hard, or not hard enough in order to seize the perfect time to adjust their training protocol to optimize their training.   

## Wireframes
[Mock Ups](https://jmp.sh/3NEK4h2)

## Component Heirarchy
[Component Tree](https://jmp.sh/izsC7pk)

## API

Table 1:
1. exercise name
2. date
3. duration
4. notes
5. user
6. workout rating

Table 2:
1. user
2. username
3. password

```JSON
{
    "records": [
        {
            "id": "recSg88UCr1ELUseL",
            "fields": {
                "date": "2020-08-30",
                "userID": 101515,
                "notes": "Great ride got a sprint jersey",
                "rating": "still good",
                "duration": 2791,
                "exercise": "Cycling",
                "created_at": "2020-09-03T14:07:12.000Z"
            },
            "createdTime": "2020-09-03T14:07:12.000Z"
        }
    ],
    "offset": "recSg88UCr1ELUseL"
}
```

## MVP

1. Home page: Blank State
2. Home page: List all Workouts 
3. View workout 
4. Add workout 

## Post-MVP

1. Edit workout
2. Delete workout
3. More fields > average heart rate, calories burned
4. user login 
5. create workout templates
6. Workout graphs

#### Component Libraries
Considering use of [FontAwesome's Icon Library](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

## SWOT Analysis

Strengths:
Once I have a plan I can be very driven and methodical in executing the plan. 

Weaknesses: 
I get hung up on the feature doing enough to be something I would consider done which can make me feel burned out. I will need to come up with goals about what this project does which is showcase working react.

Opportunities:
Appreciate what I can do and not be obsessed with the project being more. 

Threats:
Being obsessed with users only seeing their own data and that taking from fucntionality. I will need to time box a possible solution but be prepared to abandon the idea if need be.  


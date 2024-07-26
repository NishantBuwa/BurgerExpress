import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { styled } from '@mui/material/styles';

const CustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
    marginBottom: '40px',
}));

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
    width: '10px',
    height: '10px',
    backgroundColor:'red'
}));

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    marginTop: '-2px',
    marginBottom: '-35px',
}));

const CustomTimelineContent = styled(TimelineContent)(({ theme }) => ({
    // fontSize: '1.2rem',
    fontFamily: 'sui-generics',
    color:'blue'
}));

function Section2() {

    return (
        <>
           <div className="Container">
                <div className="timeline-heading d-flex justify-content-center">
                    <h2>BurgerExpress: Building a Legacy, One Burger at a Time</h2>
                </div>
                <div className="timeline">
                    <Timeline position="alternate">
                        <CustomTimelineItem>
                            <TimelineSeparator>
                                <CustomTimelineDot />
                                <CustomTimelineConnector />
                            </TimelineSeparator>
                            <CustomTimelineContent className="custom-timeline-content">2015 - The Beginning</CustomTimelineContent>
                        </CustomTimelineItem>
                        <CustomTimelineItem>
                            <TimelineSeparator>
                                <CustomTimelineDot />
                                <CustomTimelineConnector />
                            </TimelineSeparator>
                            <CustomTimelineContent className="custom-timeline-content">2017 - First Store Opens</CustomTimelineContent>
                        </CustomTimelineItem>
                        <CustomTimelineItem>
                            <TimelineSeparator>
                                <CustomTimelineDot />
                                <CustomTimelineConnector />
                            </TimelineSeparator>
                            <CustomTimelineContent className="custom-timeline-content">2019 - Expansion</CustomTimelineContent>
                        </CustomTimelineItem>
                        <CustomTimelineItem>
                            <TimelineSeparator>
                                <CustomTimelineDot />
                                <CustomTimelineConnector />
                            </TimelineSeparator>
                            <CustomTimelineContent className="custom-timeline-content">2021 - Launch of Online Store</CustomTimelineContent>
                        </CustomTimelineItem>
                        <CustomTimelineItem>
                            <TimelineSeparator>
                                <CustomTimelineDot />
                            </TimelineSeparator>
                            <CustomTimelineContent className="custom-timeline-content">2023 - Global Presence Achieved</CustomTimelineContent>
                        </CustomTimelineItem>
                    </Timeline>
                </div>

            </div>
        </>
    )
}

export default Section2

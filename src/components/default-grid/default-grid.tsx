import * as React from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: flex;
    margin-left: 10px;
`;

const GridChild = styled.div`
    flex: 1 1 auto;
    text-align: center;
`;

const GridImage = styled.img`
    height: 128px;
    width: 128px;
`;

class DefaultGrid extends React.Component {
    private lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate. Augue ut lectus arcu bibendum at varius vel. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui sapien eget mi proin sed libero enim sed faucibus. Tortor condimentum lacinia quis vel eros donec ac odio tempor.";
    private lorem2 = "Aliquam vestibulum morbi blandit cursus risus at ultrices. Dui faucibus in ornare quam viverra. Sed odio morbi quis commodo odio. Semper risus in hendrerit gravida rutrum. Amet volutpat consequat mauris nunc. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Mattis enim ut tellus elementum sagittis vitae et leo duis.";
    private lorem3 = "Malesuada fames ac turpis egestas maecenas pharetra. Faucibus turpis in eu mi. Nunc sed augue lacus viverra vitae congue eu. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Massa id neque aliquam vestibulum morbi blandit. Imperdiet nulla malesuada pellentesque elit.";
    public render() {
        return (
            <div>
            <Grid>
                <GridChild> {this.lorem1} </GridChild>
                <GridChild> {this.lorem2} </GridChild>
                <GridChild> {this.lorem3} </GridChild>
            </Grid>
            <Grid>
                <GridChild><GridImage src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/europeslostf.jpg" /></GridChild>
                <GridChild><GridImage src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/europeslostf.jpg" /></GridChild>
                <GridChild><GridImage src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/europeslostf.jpg" /></GridChild>
                <GridChild><GridImage src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/europeslostf.jpg" /></GridChild>
            </Grid>
            <Grid>
                <GridChild> {this.lorem1} </GridChild>
                <GridChild> {this.lorem2} </GridChild>
            </Grid>
            </div>
        );
      }
}

export default DefaultGrid;
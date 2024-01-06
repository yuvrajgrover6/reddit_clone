"use client";

import React from "react";
import ExpTabbar from "../components/ExpTabbar";
import Tabbar from "../components/Tabbar";
// import css
import "./scrollbar.css";
import {
  SportsEsportsOutlined,
  HomeOutlined,
  NorthEastOutlined,
  SportsBaseballOutlined,
  InsertChartOutlinedTwoTone,
  LiveTvOutlined,
  FlareOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";
import HeadingBar from "./HeadingBar";

const Sidebar = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="w-64 border-r border-1 py-4 px-4 max-h-screen overflow-y-auto custom-scrollbar sticky">
      <ul className="list-none">
        <li>
          <Tabbar
            label="Home"
            icon={<HomeOutlined />}
            index={0}
            activeIndex={active}
            onClick={() => setActive(0)}
          />
          <Tabbar
            label="Popular"
            icon={<NorthEastOutlined />}
            index={1}
            activeIndex={active}
            onClick={() => setActive(1)}
          />
        </li>
        <hr />
        <li>
          <HeadingBar
            label="TOPICS"
            children={
              <div>
                <ExpTabbar
                  icon={<SportsEsportsOutlined style={{ color: "#2c3739" }} />}
                  label="Gaming"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<SportsBaseballOutlined style={{ color: "#2c3739" }} />}
                  label="Sports"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={
                    <InsertChartOutlinedTwoTone style={{ color: "#2c3739" }} />
                  }
                  label="Business"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<ShowChartOutlined style={{ color: "#2c3739" }} />}
                  label="Crypto"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<LiveTvOutlined style={{ color: "#2c3739" }} />}
                  label="Television"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<FlareOutlined style={{ color: "#2c3739" }} />}
                  label="Celebrity"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
              </div>
            }
          />
        </li>
        <hr />
        <li>
          <HeadingBar
            label="RESOURCES"
            children={
              <div>
                <ExpTabbar
                  icon={<SportsEsportsOutlined style={{ color: "#2c3739" }} />}
                  label="Gaming"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<SportsBaseballOutlined style={{ color: "#2c3739" }} />}
                  label="Sports"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={
                    <InsertChartOutlinedTwoTone style={{ color: "#2c3739" }} />
                  }
                  label="Business"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<ShowChartOutlined style={{ color: "#2c3739" }} />}
                  label="Crypto"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<LiveTvOutlined style={{ color: "#2c3739" }} />}
                  label="Television"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<FlareOutlined style={{ color: "#2c3739" }} />}
                  label="Celebrity"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
              </div>
            }
          />
        </li>

        <li>
          <HeadingBar
            label="POPULAR POSTS"
            children={
              <div>
                <ExpTabbar
                  icon={<SportsEsportsOutlined style={{ color: "#2c3739" }} />}
                  label="Gaming"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<SportsBaseballOutlined style={{ color: "#2c3739" }} />}
                  label="Sports"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={
                    <InsertChartOutlinedTwoTone style={{ color: "#2c3739" }} />
                  }
                  label="Business"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<ShowChartOutlined style={{ color: "#2c3739" }} />}
                  label="Crypto"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<LiveTvOutlined style={{ color: "#2c3739" }} />}
                  label="Television"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
                <ExpTabbar
                  icon={<FlareOutlined style={{ color: "#2c3739" }} />}
                  label="Celebrity"
                  children={
                    <div className="flex flex-col">
                      <Tabbar
                        label="Home"
                        icon={<HomeOutlined />}
                        index={0}
                        activeIndex={active}
                        onClick={() => setActive(0)}
                      />
                      <Tabbar
                        label="Popular"
                        icon={<NorthEastOutlined />}
                        index={1}
                        activeIndex={active}
                        onClick={() => setActive(1)}
                      />
                    </div>
                  }
                />
              </div>
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

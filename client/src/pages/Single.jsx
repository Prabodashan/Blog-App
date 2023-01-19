import React from "react";
import { Link } from "react-router-dom";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          distinctio ab, magnam libero necessitatibus cupiditate iste
          repudiandae, ad a neque fuga molestias perspiciatis?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
          alias delectus, iste sequi velit iusto maiores molestias iure esse!
          Inventore suscipit explicabo doloribus eligendi adipisci corrupti
          quasi perspiciatis voluptatem rem reprehenderit nisi, eaque iste
          nostrum maiores aliquam consequatur minus error eum totam obcaecati
          quia? Unde optio, dolor, recusandae ipsa cupiditate non nobis,
          incidunt porro temporibus velit saepe dicta consequuntur. Minima
          delectus tempore corrupti ipsum similique dolores, dolorum molestias
          maiores saepe corporis sint architecto ea ducimus dolorem alias
          voluptate quibusdam officiis exercitationem, nesciunt aliquid maxime
          molestiae ex earum? Rem doloremque pariatur illum quas minima velit
          reprehenderit dolores nemo magni alias aspernatur sunt, non
          repudiandae architecto officia, delectus excepturi debitis quidem,
          numquam unde temporibus harum fugiat. Illum non eaque sit perferendis!
          Laboriosam perspiciatis, sapiente voluptates iure minima magni
          expedita cum cumque aperiam nam praesentium dignissimos, beatae
          aliquam, modi nisi? Unde, voluptas. Animi earum neque fugit aliquam,
          placeat ea adipisci at possimus vitae ratione voluptas repellat ullam
          quidem laboriosam. Ad quasi repellendus ea doloribus, enim
          exercitationem itaque repudiandae quidem corporis magni nisi ab odit
          placeat aliquid dolorum distinctio recusandae vero at, praesentium
          culpa molestias! Facilis minima nobis ipsam quae? Dignissimos
          inventore architecto totam excepturi ipsum quos, maxime quam ad quasi
          quod deleniti voluptas magni earum similique, pariatur illum, illo
          saepe numquam. Vel blanditiis similique culpa temporibus officiis hic
          labore libero sint qui iste ad aut aliquam eveniet in repellendus,
          dolor suscipit ullam! Rerum error consequuntur sunt nisi quae,
          eligendi sapiente accusamus mollitia. Illum nemo nihil, provident quae
          dignissimos accusantium autem repudiandae cum!
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;

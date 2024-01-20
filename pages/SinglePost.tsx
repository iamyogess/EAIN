import Image from "next/image";
import React from "react";

const SinglePost = () => {
  return (
    <div className="padding-container max-container flex flex-col md:flex-row w-full p-5 gap-2">
      <div className="md:flex-5 w-full">
        <Image
          src="/heroImage.jpg"
          height={200}
          width={500}
          alt="image"
          className="w-full object-cover rounded-md"
        />
        <div className="flex gap-5">
          <span>date</span>
          <span>category</span>
        </div>
        <h1 className="bold-32 md:bold-40">Lorem ipsum dolor sit amet.</h1>
        <p className="regular-14 md:regular-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum adipisci inventore
          neque possimus, at, officia, maiores minus soluta id est quas
          obcaecati? Mollitia culpa necessitatibus voluptatibus molestiae quasi!
          Tempora, dignissimos libero. Eligendi ut expedita deleniti debitis
          pariatur magni cupiditate voluptate quas, dolorum laborum fugiat eum
          similique repellendus quos commodi sunt sit ipsum? Nobis labore
          aperiam odio error nemo quas voluptates vel? Exercitationem sapiente
          doloremque harum itaque sequi asperiores, vitae commodi. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Molestiae, velit. Quis
          facere sapiente voluptatibus accusantium ducimus a. Unde et dolorem,
          perspiciatis accusantium omnis ullam, fuga temporibus impedit esse ea
          voluptas pariatur quam molestias repellendus asperiores veniam at nemo
          ipsum quod. Cupiditate id nemo nisi architecto deleniti pariatur,
          laboriosam incidunt dolor excepturi magnam cum modi tempore minus
          maxime itaque ea fugit assumenda vero exercitationem earum iste qui!
          Laudantium ex, reiciendis nobis odit ut quia consectetur itaque at qui
          repellendus ratione cupiditate similique minima soluta beatae officia
          nostrum impedit, totam nemo? Quo quisquam eveniet veniam, molestias
          iure sapiente itaque unde quos quasi obcaecati architecto, provident
          iusto? Ipsa nam iste voluptatibus obcaecati, placeat vel? Eum
          doloribus eius placeat, voluptatum quod quo quidem illum temporibus
          repudiandae, quasi minima alias omnis ratione ex a aperiam vel totam
          laudantium impedit quia ipsa. Minima saepe impedit soluta, dicta
          adipisci numquam odio vitae iure quia quam non recusandae, laborum
          excepturi beatae eaque. Quia, minima? Ullam, quam? Dignissimos, sequi!
          Quaerat sequi dolore eos explicabo nam? Sint veritatis, omnis
          similique explicabo dolore temporibus itaque quaerat dolor suscipit
          maiores quasi officiis adipisci expedita inventore! Repellendus
          commodi nobis consectetur odio! Cum rem non aperiam, repellat
          voluptates quidem fugiat et labore ea! Consequatur veritatis mollitia
          aperiam vitae harum ut amet magni commodi. Cumque id perspiciatis
          officiis quaerat. Corrupti quas error optio velit ad nesciunt magnam
          esse corporis adipisci, officiis odio, consectetur quasi veniam
          ratione neque necessitatibus. Voluptates voluptas consectetur illo
          maiores explicabo illum commodi alias provident minima placeat,
          accusamus nostrum soluta impedit culpa pariatur doloribus distinctio
          dicta sequi eos quo ad, consequuntur quam hic sapiente. Voluptatem nam
          nemo dolorem aut rem natus quidem mollitia, harum quam dolores
          accusantium rerum excepturi nesciunt cum. Dolorum consectetur tenetur
          optio quae natus eum qui quis iusto necessitatibus amet voluptatibus
          excepturi cupiditate corporis fuga quidem minima laborum soluta, ex
          voluptatem. Explicabo, corporis placeat! Vero officiis numquam nam,
          commodi doloremque quasi. Amet ipsum molestiae deleniti ab suscipit
          nesciunt vitae, illo explicabo culpa sit voluptatem est quam aut fuga
          nulla, odio non qui! Blanditiis pariatur commodi rerum perspiciatis!
          Odit, ullam? Aliquam cum nulla, totam nostrum fugiat libero excepturi
          sunt repudiandae error doloremque sint placeat velit officiis tempora
          nesciunt delectus quibusdam consectetur, hic sapiente! Recusandae
          harum asperiores aspernatur voluptate repellendus blanditiis corrupti
          minus ad illum mollitia quos voluptates obcaecati, amet, quidem
          molestias possimus, consectetur placeat ex quam earum ipsa! Adipisci
          pariatur aliquam nisi dolore vitae iure ex fugiat hic odio doloribus
          delectus, aut dicta tenetur distinctio modi nostrum culpa nulla natus
          eius assumenda labore quisquam impedit earum nobis. Quos tenetur rem
          corrupti atque, non officiis obcaecati! Eos voluptas repudiandae porro
          alias, nesciunt eveniet, adipisci impedit nostrum quae expedita
          dignissimos. Veniam autem rerum, possimus fuga adipisci quam? Dolorem,
          laudantium soluta ipsa vitae mollitia, qui non nisi delectus laborum
          harum, at error ad ratione sit vel ab quos libero sapiente temporibus.
          Delectus pariatur deleniti nobis eius omnis eum blanditiis obcaecati
          alias incidunt voluptates asperiores magnam voluptatibus corrupti
          facilis adipisci voluptate placeat quis quos tempore explicabo, saepe
          harum magni nostrum ducimus! Voluptates, similique. Consequuntur.
        </p>
      </div>
      <div className="md:flex-2 flex flex-col gap-4">
        {/* related posts */}
        <div className="border p-1 rounded-md">
          <h3 className="bold-18 md:bold-20">Lorem ipsum dolor sit.</h3>
          <p className="regular-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            quidem...
          </p>
        </div>
        {/* latest posts */}
        <div className="border p-1 rounded-md">
          <h3 className="bold-18 md:bold-20">Lorem ipsum dolor sit.</h3>
          <p className="regular-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            quidem...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

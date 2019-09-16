import React from 'react';
import intro from './intro.jpg';
import licenseImg from './licenseImg.png';

const introduction = {
  title: 'Introduction',
  anchor: 'introduction',
  text: (
    <div>
      <p>
        With the rapid development of Semantic Web technologies, various
        knowledge graphs are published on the Web using Resource Description
        Framework (RDF), such as Wikidata and DBpedia. Knowledge graphs provide
        for setting RDF links among different entities, thereby forming a large
        heterogeneous graph, supporting semantic search, question answering and
        other intelligent services. Meanwhile, public availability of visual
        resource collections has attracted much attention for different Computer
        Vision (CV) research purposes, including visual question answering,
        image classiﬁcation, object and relationship detection, etc. And we have
        witnessed promising results by encoding entity and relation information
        of textual knowledge graphs for CV tasks. Whereas most knowledge graph
        construction work in the Semantic Web and Natural Language Processing
        (NLP) communities still focus on organizing and discovering only textual
        knowledge in a structured representation. There is a relatively small
        amount of attention in utilizing visual resources for KG research. A
        visual database is normally a rich source of image or video data and
        provides sufficient visual information about entities in KGs. Obviously,
        making link prediction and entity alignment in wider scope can empower
        models to make better performance when considering textual and visual
        features together.
      </p>
      <p>
        As mentioned above, general knowledge graphs focus on the textual facts.
        There is still no comprehensive multi-modal knowledge graph dataset
        prohibiting further exploring textual and visual facts on either side.
        To ﬁll this gap, we provide a comprehensive multi-modal dataset (called
        <span style={{ fontWeight: '600' }}> Richpedia</span>) in this paper, as
        shown in figure below.
      </p>
      <img src={intro} alt="intro" style={{ width: '100%' }} />
      <p>
        In summary, our <span style={{ fontWeight: '600' }}>Richpedia</span>{' '}
        data resource mainly makes the following contributions:
      </p>
      <ul>
        <li>
          To our best knowledge, we are the ﬁrst to provide comprehensive
          visualrelational resources to general knowledge graphs. The result is
          a big and high-quality multi-modal knowledge graph dataset, which
          provides a wider data scope to the researchers from The Semantic Web
          and Computer Vision.
        </li>
        <li>
          We propose a novel framework to construct the multi-modal knowledge
          graph. The process starts by collecting entities and images from
          Wikidata, Wikipedia, and Search Engine respectively. Images are then
          ﬁltered by a diversity retrieval model. Finally, RDF links are set
          between image entities based on the hyperlinks and descriptions in
          Wikipedia.
        </li>
        <li>
          We publish the <span style={{ fontWeight: '600' }}>Richpedia</span> as
          an open resource, and provide a faceted query endpoint using Apache
          Jena Fuseki. Researchers can retrieve and leverage data distributed
          over general KGs and image resources to answering more richer visual
          queries and make multi-relational link predictions.
        </li>
      </ul>
    </div>
  ),
};

const download = {
  title: 'Download',
  anchor: 'download',
  text: (
    <div>
      <p>
        You can download parts of images and triples of relationship from here
        through Google Drive. Because the image entity folder is relatively
        large, we split it into three folders(Image1, Image2, Image3) for
        download.
      </p>
      <div>
        <ul>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              Image
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1QVAUWf87v2Lct1YYlygOpphwE5TMlNBg"
              >
                Image1
              </a>
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=15aoYUdCB5_bhagz3TlbBhkA3MLGBJv9P"
              >
                Image2
              </a>
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1TiATEauW91_ptJz4qCk0Kn1p_6gojXTf"
              >
                Image3
              </a>
            </span>
          </li>
          <li>
            <span
              style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
            >
              Json
            </span>
            <span style={{ display: 'block' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/open?id=1iWRnsAybp6PY8aEtRZoAk1vvlcV1BnZO"
              >
                Triples
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  ),
};

const friendlyLink = {
  title: 'Friendly Link',
  anchor: 'friendlyLink',
  text: (
    <div>
      <p>Our data uses other resources, so we make a statement here.</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
          >
            Wikidata
          </a>{' '}
          is becoming an increasingly important knowledge graph in the research
          community. We collect the KG entities from Wikidata as EKG in
          <span style={{ fontWeight: '600' }}>Richpedia</span>.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.wikipedia.org/"
          >
            Wikipedia
          </a>{' '}
          contains images for KG entities in Wikidata and a number of related
          hyperlinks among these entities. We will collect part of the image
          entities from Wikipedia and relations between collected KG entities
          and image entities. We will also discover relations between image
          entities based on the hyperlinks and related descriptions in
          Wikipedia.
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/"
          >
            Google
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://search.yahoo.com/"
          >
            Yahoo
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cn.bing.com/"
          >
            Bing
          </a>{' '}
          image sources: To obtain sufficient image entities related to each KG
          entity, we implemented a web crawler taking input as KG entities to
          image search engines Google Images, Bing Images, and Yahoo Image
          Search, and parse query results.
        </li>
      </ul>
    </div>
  ),
};

const license = {
  title: 'License',
  anchor: 'license',
  text: (
    <div>
      <p>
        <a href="http://creativecommons.org/licenses/by/4.0/">
          <img src={licenseImg} alt="licenseImg" />
        </a>
      </p>
      <p>
        This work is licensed under a{' '}
        <a href="http://creativecommons.org/licenses/by/4.0/">
          Creative Commons Attribution 4.0 International License
        </a>
      </p>
    </div>
  ),
};

const contact = {
  title: 'Contact',
  anchor: 'contact',
  text: (
    <div>
      <ul>
        <li>
          Meng Wang{' '}
          <a href="mailto:meng.wang@seu.edu.cn">meng.wang@seu.edu.cn</a>
        </li>
        <li>
          Qiushuo Zheng{' '}
          <a href="mailto:qs_zheng@seu.edu.cn">qs_zheng@seu.edu.cn</a>
        </li>
      </ul>
    </div>
  ),
};

const update = {
  title: 'Update',
  anchor: 'update',
  text: (
    <div>
      <ul>
        <li>
          <span
            style={{ display: 'block', fontSize: '23px', fontWeight: '700' }}
          >
            V1.0
          </span>
          <p>Add images and triples of relationship.</p>
        </li>
      </ul>
    </div>
  ),
};

const moreInfo = {
  title: 'More information',
  anchor: 'moreInfo',
  text: (
    <div>
      <p>
        <a href="https://github.com/StephanieTM/article">Github Pages</a>
      </p>
      <p>
        <a href="http://rich.wangmengsd.com/">website</a>
      </p>
    </div>
  ),
};

const texts = [
  introduction,
  download,
  friendlyLink,
  license,
  contact,
  update,
  moreInfo,
];

export default texts;
export {
  introduction,
  download,
  friendlyLink,
  license,
  contact,
  update,
  moreInfo,
};

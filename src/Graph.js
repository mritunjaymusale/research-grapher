import React, { Component } from "react";
import { ArxivIdContext } from "./Components/Context";
import { Graph as D3Graph } from "react-d3-graph";
import { GraphProcessor } from "./GraphProcessor";

export class Graph extends Component {
  static contextType = ArxivIdContext;

  render() {
    if (!this.context.isLoading) {
      var json = this.context.paperDetails;

      var graph = GraphProcessor.processGraph(json);
      const { attributes, options, ...data } = graph;
      return (
        <div className="container">
          <D3Graph
            id="graph-id2" // id is mandatory
            data={data}
            config={myConfig}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const myConfig = {
  staticGraph: false,
  linkHighlightBehavior: true,
  nodeHighlightBehavior: true,
  highlightDegree: 1,
  highlightOpacity: 0.2,
  directed: true,
  focusAnimationDuration: 0,
  focusedNodeId: "nodeIdToTriggerZoomAnimation",
  d3: {
    linkLength: 350,
    gravity: -250,
    linkStrength: 1,
  },
  node: {
    color: "lightgreen",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "SAME",
    highlightStrokeWidth: 1.5,
  },
  link: {
    highlightColor: "blue",
    highlightFontSize: 15,
    highlightFontWeight: "bold",
    renderLabel: true,
    semanticStrokeWidth: true,
  },
};
const HardCodedData = {
  abstract:
    "We propose an unsupervised capsule architecture for 3D point clouds. We compute capsule decompositions of objects through permutation-equivariant attention, and self-supervise the process by training with pairs of randomly rotated objects. Our key idea is to aggregate the attention masks into semantic keypoints, and use these to supervise a decomposition that satisfies the capsule invariance/equivariance properties. This not only enables the training of a semantically consistent decomposition, but also allows us to learn a canonicalization operation that enables object-centric reasoning. In doing so, we require neither classification labels nor manually-aligned training datasets to train. Yet, by learning an object-centric representation in an unsupervised manner, our method outperforms the state-of-the-art on 3D point cloud reconstruction, registration, and unsupervised classification. We will release the code and dataset to reproduce our results as soon as the paper is published.",
  arxivId: "2012.04718",
  authors: [
    {
      authorId: "28906842",
      name: "Weiwei Sun",
      url: "https://www.semanticscholar.org/author/28906842",
    },
    {
      authorId: "1796480",
      name: "A. Tagliasacchi",
      url: "https://www.semanticscholar.org/author/1796480",
    },
    {
      authorId: "22257166",
      name: "Boyang Deng",
      url: "https://www.semanticscholar.org/author/22257166",
    },
    {
      authorId: "143752292",
      name: "S. Sabour",
      url: "https://www.semanticscholar.org/author/143752292",
    },
    {
      authorId: "2720347",
      name: "S. Yazdani",
      url: "https://www.semanticscholar.org/author/2720347",
    },
    {
      authorId: "1695689",
      name: "Geoffrey E. Hinton",
      url: "https://www.semanticscholar.org/author/1695689",
    },
    {
      authorId: "2906716",
      name: "K. M. Yi",
      url: "https://www.semanticscholar.org/author/2906716",
    },
  ],
  citationVelocity: 0,
  citations: [
    {
      arxivId: "2102.12627",
      authors: [{ authorId: "1695689", name: "Geoffrey E. Hinton" }],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "5cee90b85b88e4de1d51b2963613a48b68916ac7",
      title: "How to represent part-whole hierarchies in a neural network",
      url:
        "https://www.semanticscholar.org/paper/5cee90b85b88e4de1d51b2963613a48b68916ac7",
      venue: "ArXiv",
      year: 2021,
    },
    {
      arxivId: "2104.00698",
      authors: [
        { authorId: "35497986", name: "Dylan R. Ashley" },
        { authorId: "3469155", name: "Anssi Kanervisto" },
        { authorId: "34467301", name: "Brendan Bennett" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "88ab12462a1ec7dd6d2c71319909de90fd1e2321",
      title:
        "Back to Square One: Superhuman Performance in Chutes and Ladders Through Deep Neural Networks and Tree Search",
      url:
        "https://www.semanticscholar.org/paper/88ab12462a1ec7dd6d2c71319909de90fd1e2321",
      venue: "ArXiv",
      year: 2021,
    },
  ],
  corpusId: 228063963,
  doi: null,
  fieldsOfStudy: ["Computer Science"],
  influentialCitationCount: 0,
  is_open_access: false,
  is_publisher_licensed: true,
  paperId: "16fd3bcea628a20d273c35d40447fba3b3aa4774",
  references: [
    {
      arxivId: "1909.05736",
      authors: [
        { authorId: "22257166", name: "Boyang Deng" },
        { authorId: "32627314", name: "Kyle Genova" },
        { authorId: "2720347", name: "S. Yazdani" },
        { authorId: "35119991", name: "Sofien Bouaziz" },
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
        { authorId: "1796480", name: "A. Tagliasacchi" },
      ],
      doi: "10.1109/cvpr42600.2020.00011",
      intent: [],
      isInfluential: false,
      paperId: "dfb9e786b146f15951ed7343d45b3c75785ec5bc",
      title: "CvxNet: Learnable Convex Decomposition",
      url:
        "https://www.semanticscholar.org/paper/dfb9e786b146f15951ed7343d45b3c75785ec5bc",
      venue:
        "2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2020,
    },
    {
      arxivId: "1907.02545",
      authors: [
        { authorId: null, name: "Weiwei Sun" },
        { authorId: "144893136", name: "W. Jiang" },
        { authorId: "1995333", name: "Eduard Trulls" },
        { authorId: "1796480", name: "A. Tagliasacchi" },
        { authorId: "2906716", name: "K. Yi" },
      ],
      doi: "10.1109/CVPR42600.2020.01130",
      intent: [],
      isInfluential: false,
      paperId: "45151d58a2f61179702b14fc6b46de7292a445d5",
      title:
        "ACNe: Attentive Context Normalization for Robust Permutation-Equivariant Learning",
      url:
        "https://www.semanticscholar.org/paper/45151d58a2f61179702b14fc6b46de7292a445d5",
      venue:
        "2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2020,
    },
    {
      arxivId: "1802.05384",
      authors: [
        { authorId: "35930660", name: "Thibault Groueix" },
        { authorId: "145002004", name: "Matthew Fisher" },
        { authorId: "3082383", name: "Vladimir G. Kim" },
        { authorId: "145160921", name: "Bryan C. Russell" },
        { authorId: "48582897", name: "Mathieu Aubry" },
      ],
      doi: "10.1109/CVPR.2018.00030",
      intent: [],
      isInfluential: false,
      paperId: "840e804bb5ed1944e494959c2980a90bea0675c4",
      title: "A Papier-Mache Approach to Learning 3D Surface Generation",
      url:
        "https://www.semanticscholar.org/paper/840e804bb5ed1944e494959c2980a90bea0675c4",
      venue:
        "2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      year: 2018,
    },
    {
      arxivId: null,
      authors: [
        { authorId: null, name: "Geoffrey E Hinton" },
        { authorId: null, name: "Kevin J Lang" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title: "Trans - forming Auto - Encoders",
      url: "",
      venue: "International Conference on Artificial Neural Networks",
      year: null,
    },
    {
      arxivId: "1905.03304",
      authors: [
        { authorId: "37622840", name: "Yue Wang" },
        { authorId: "37526452", name: "J. Solomon" },
      ],
      doi: "10.1109/ICCV.2019.00362",
      intent: [],
      isInfluential: false,
      paperId: "d4c1cfc0cce2140fb8cf5c175c0a34b467298ee9",
      title:
        "Deep Closest Point: Learning Representations for Point Cloud Registration",
      url:
        "https://www.semanticscholar.org/paper/d4c1cfc0cce2140fb8cf5c175c0a34b467298ee9",
      venue: "2019 IEEE/CVF International Conference on Computer Vision (ICCV)",
      year: 2019,
    },
    {
      arxivId: "1612.00404",
      authors: [
        { authorId: "2757335", name: "Shubham Tulsiani" },
        { authorId: "144914140", name: "H. Su" },
        { authorId: "1744254", name: "L. Guibas" },
        { authorId: "1763086", name: "Alexei A. Efros" },
        { authorId: "143751119", name: "Jitendra Malik" },
      ],
      doi: "10.1109/CVPR.2017.160",
      intent: [],
      isInfluential: false,
      paperId: "b0198cedf562676d25a8b0c51c9f207d31549e98",
      title: "Learning Shape Abstractions by Assembling Volumetric Primitives",
      url:
        "https://www.semanticscholar.org/paper/b0198cedf562676d25a8b0c51c9f207d31549e98",
      venue:
        "2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2017,
    },
    {
      arxivId: "2008.09110",
      authors: [
        { authorId: "2605229", name: "Jia-Yuan Gu" },
        { authorId: "2650832", name: "W. Ma" },
        { authorId: "39981216", name: "S. Manivasagam" },
        { authorId: "3468942", name: "Wenyuan Zeng" },
        { authorId: null, name: "Zihao Wang" },
        { authorId: "3372084", name: "Y. Xiong" },
        { authorId: "1423723631", name: "Hao Su" },
        { authorId: "2422559", name: "R. Urtasun" },
      ],
      doi: "10.1007/978-3-030-58558-7_17",
      intent: [],
      isInfluential: false,
      paperId: "28a607a204810e52ae77c810de9ab499c7cdeb9f",
      title: "Weakly-supervised 3D Shape Completion in the Wild",
      url:
        "https://www.semanticscholar.org/paper/28a607a204810e52ae77c810de9ab499c7cdeb9f",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "1611.08974",
      authors: [
        { authorId: "3340170", name: "Shuran Song" },
        { authorId: "1807197", name: "F. Yu" },
        { authorId: "38591293", name: "A. Zeng" },
        { authorId: "145830541", name: "Angel X. Chang" },
        { authorId: "2295141", name: "M. Savva" },
        { authorId: "1807080", name: "T. Funkhouser" },
      ],
      doi: "10.1109/CVPR.2017.28",
      intent: [],
      isInfluential: false,
      paperId: "8a05db7a75c65ee61c3ca7a6e5401b946166290d",
      title: "Semantic Scene Completion from a Single Depth Image",
      url:
        "https://www.semanticscholar.org/paper/8a05db7a75c65ee61c3ca7a6e5401b946166290d",
      venue:
        "2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2017,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "2666565", name: "Peng-Shuai Wang" },
        { authorId: "47810170", name: "Chunyu Sun" },
        { authorId: "46399735", name: "Y. Liu" },
        { authorId: "49144260", name: "Xin Tong" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "6d407a00108687c3b22921311d730da5c9832214",
      title: "Adaptive O-CNN: A Patch-based Deep Representation of 3D Shapes",
      url:
        "https://www.semanticscholar.org/paper/6d407a00108687c3b22921311d730da5c9832214",
      venue: "",
      year: 2018,
    },
    {
      arxivId: "1908.04725",
      authors: [
        { authorId: "1387974557", name: "Theo Deprelle" },
        { authorId: "35930660", name: "Thibault Groueix" },
        { authorId: "145002004", name: "Matthew Fisher" },
        { authorId: "3082383", name: "Vladimir G. Kim" },
        { authorId: "145160921", name: "Bryan C. Russell" },
        { authorId: "48582897", name: "Mathieu Aubry" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "b9d3562fa82fc115474558221761c2ad92370d97",
      title:
        "Learning elementary structures for 3D shape generation and matching",
      url:
        "https://www.semanticscholar.org/paper/b9d3562fa82fc115474558221761c2ad92370d97",
      venue: "NeurIPS",
      year: 2019,
    },
    {
      arxivId: "1812.03828",
      authors: [
        { authorId: "8226549", name: "Lars M. Mescheder" },
        { authorId: "52211220", name: "Michael Oechsle" },
        { authorId: "145048708", name: "M. Niemeyer" },
        { authorId: "2388416", name: "S. Nowozin" },
        { authorId: "47237027", name: "Andreas Geiger" },
      ],
      doi: "10.1109/CVPR.2019.00459",
      intent: [],
      isInfluential: false,
      paperId: "2e689bdce24cf3644432505ce2783f03a1445ed2",
      title: "Occupancy Networks: Learning 3D Reconstruction in Function Space",
      url:
        "https://www.semanticscholar.org/paper/2e689bdce24cf3644432505ce2783f03a1445ed2",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: "1512.03385",
      authors: [
        { authorId: "39353098", name: "Kaiming He" },
        { authorId: "1771551", name: "X. Zhang" },
        { authorId: "3080683", name: "Shaoqing Ren" },
        { authorId: null, name: "Jian Sun" },
      ],
      doi: "10.1109/cvpr.2016.90",
      intent: [],
      isInfluential: false,
      paperId: "2c03df8b48bf3fa39054345bafabfeff15bfd11d",
      title: "Deep Residual Learning for Image Recognition",
      url:
        "https://www.semanticscholar.org/paper/2c03df8b48bf3fa39054345bafabfeff15bfd11d",
      venue:
        "2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2016,
    },
    {
      arxivId: "1712.01537",
      authors: [
        { authorId: "2666565", name: "Peng-Shuai Wang" },
        { authorId: "37948271", name: "Yang Liu" },
        { authorId: "15221167", name: "Yu-Xiao Guo" },
        { authorId: "14662641", name: "Chun-Yu Sun" },
        { authorId: "49144168", name: "X. Tong" },
      ],
      doi: "10.1145/3072959.3073608",
      intent: [],
      isInfluential: false,
      paperId: "bb31e34ba313aee0a3e7cc3e14d131d08bfa0401",
      title: "O-CNN",
      url:
        "https://www.semanticscholar.org/paper/bb31e34ba313aee0a3e7cc3e14d131d08bfa0401",
      venue: "ACM Trans. Graph.",
      year: 2017,
    },
    {
      arxivId: null,
      authors: [{ authorId: "1644050191", name: "G. LoweDavid" }],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "4cab9c4b571761203ed4c3a4c5a07dd615f57a91",
      title: "Distinctive Image Features from Scale-Invariant Keypoints",
      url:
        "https://www.semanticscholar.org/paper/4cab9c4b571761203ed4c3a4c5a07dd615f57a91",
      venue: "",
      year: 2004,
    },
    {
      arxivId: "2007.10985",
      authors: [
        { authorId: "1817030", name: "Saining Xie" },
        { authorId: "3016273", name: "Jiatao Gu" },
        { authorId: "35578711", name: "Demi Guo" },
        { authorId: "1898455", name: "Charles R. Qi" },
        { authorId: "1744254", name: "L. Guibas" },
        { authorId: "2528439", name: "O. Litany" },
      ],
      doi: "10.1007/978-3-030-58580-8_34",
      intent: [],
      isInfluential: false,
      paperId: "491188ac198663094537cb4c38ac1c8808ef7440",
      title:
        "PointContrast: Unsupervised Pre-training for 3D Point Cloud Understanding",
      url:
        "https://www.semanticscholar.org/paper/491188ac198663094537cb4c38ac1c8808ef7440",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "39607608", name: "Chao Chen" },
        { authorId: "144958813", name: "Guanbin Li" },
        { authorId: "30003410", name: "Ruijia Xu" },
        { authorId: "1765674", name: "Tianshui Chen" },
        { authorId: "50469060", name: "Mei Wang" },
        { authorId: "49478124", name: "L. Lin" },
      ],
      doi: "10.1109/CVPR.2019.00513",
      intent: [],
      isInfluential: false,
      paperId: "a8a70942cec397e6b84de252fa3b9cd24948fa57",
      title:
        "ClusterNet: Deep Hierarchical Cluster Network With Rigorously Rotation-Invariant Representation for Point Cloud Analysis",
      url:
        "https://www.semanticscholar.org/paper/a8a70942cec397e6b84de252fa3b9cd24948fa57",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: null,
      authors: [{ authorId: "38850910", name: "G. Hinton" }],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "6840bf5f0f52138d72f9ebf484a47c4037a45a03",
      title: "Learnable Convex Decomposition",
      url:
        "https://www.semanticscholar.org/paper/6840bf5f0f52138d72f9ebf484a47c4037a45a03",
      venue: "",
      year: 2020,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
        { authorId: "143752292", name: "Sara Sabour" },
        { authorId: "27737461", name: "Nicholas Frosst" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "603caed9430283db6c7f43169555c8d18e97a281",
      title: "Matrix capsules with EM routing",
      url:
        "https://www.semanticscholar.org/paper/603caed9430283db6c7f43169555c8d18e97a281",
      venue: "ICLR",
      year: 2018,
    },
    {
      arxivId: "1901.02970",
      authors: [
        { authorId: "49528047", name: "He Wang" },
        { authorId: "39612999", name: "Srinath Sridhar" },
        { authorId: "1692473", name: "Jingwei Huang" },
        { authorId: "144410384", name: "J. Valentin" },
        { authorId: "3340170", name: "Shuran Song" },
        { authorId: "1744254", name: "L. Guibas" },
      ],
      doi: "10.1109/CVPR.2019.00275",
      intent: [],
      isInfluential: false,
      paperId: "c8844833b24cc60a0fd5622b1eac7c234da58a75",
      title:
        "Normalized Object Coordinate Space for Category-Level 6D Object Pose and Size Estimation",
      url:
        "https://www.semanticscholar.org/paper/c8844833b24cc60a0fd5622b1eac7c234da58a75",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: "2003.10983",
      authors: [
        { authorId: "3428200", name: "Rohan Chabra" },
        { authorId: "9572099", name: "J. E. Lenssen" },
        { authorId: "48105320", name: "Eddy Ilg" },
        { authorId: "2056893", name: "Tanner Schmidt" },
        { authorId: "20128275", name: "J. Straub" },
        { authorId: "3289186", name: "S. Lovegrove" },
        { authorId: "50366818", name: "Richard A. Newcombe" },
      ],
      doi: "10.1007/978-3-030-58526-6_36",
      intent: [],
      isInfluential: false,
      paperId: "fc4d4f9f01600d0dbc32e29b8112c19772b676a7",
      title:
        "Deep Local Shapes: Learning Local SDF Priors for Detailed 3D Reconstruction",
      url:
        "https://www.semanticscholar.org/paper/fc4d4f9f01600d0dbc32e29b8112c19772b676a7",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "1806.07572",
      authors: [
        { authorId: "51034104", name: "Arthur Jacot" },
        { authorId: "50810629", name: "F. Gabriel" },
        { authorId: "50975196", name: "C. Hongler" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "fda0021390fc4fe9b168700a332e3f634f162dc5",
      title:
        "Neural Tangent Kernel: Convergence and Generalization in Neural Networks",
      url:
        "https://www.semanticscholar.org/paper/fda0021390fc4fe9b168700a332e3f634f162dc5",
      venue: "NeurIPS",
      year: 2018,
    },
    {
      arxivId: "1807.03146",
      authors: [
        { authorId: "37016781", name: "Supasorn Suwajanakorn" },
        { authorId: "1830653", name: "Noah Snavely" },
        { authorId: "2704494", name: "J. Tompson" },
        { authorId: "144739074", name: "Mohammad Norouzi" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "bebea83479a8e1988a7da32584e37bfc463d32d4",
      title:
        "Discovery of Latent 3D Keypoints via End-to-end Geometric Reasoning",
      url:
        "https://www.semanticscholar.org/paper/bebea83479a8e1988a7da32584e37bfc463d32d4",
      venue: "NeurIPS",
      year: 2018,
    },
    {
      arxivId: "1812.02822",
      authors: [
        { authorId: "2406577", name: "Zhiqin Chen" },
        { authorId: "39497427", name: "Hao Zhang" },
      ],
      doi: "10.1109/CVPR.2019.00609",
      intent: [],
      isInfluential: false,
      paperId: "c3294425af6e2c059835ec7f0dca7290b48a8faf",
      title: "Learning Implicit Fields for Generative Shape Modeling",
      url:
        "https://www.semanticscholar.org/paper/c3294425af6e2c059835ec7f0dca7290b48a8faf",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: "1506.02640",
      authors: [
        { authorId: "40497777", name: "Joseph Redmon" },
        { authorId: "2038685", name: "S. Divvala" },
        { authorId: "2983898", name: "Ross B. Girshick" },
        { authorId: "47465174", name: "Ali Farhadi" },
      ],
      doi: "10.1109/CVPR.2016.91",
      intent: [],
      isInfluential: false,
      paperId: "f8e79ac0ea341056ef20f2616628b3e964764cfd",
      title: "You Only Look Once: Unified, Real-Time Object Detection",
      url:
        "https://www.semanticscholar.org/paper/f8e79ac0ea341056ef20f2616628b3e964764cfd",
      venue:
        "2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2016,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "32627314", name: "Kyle Genova" },
        { authorId: "39578349", name: "F. Cole" },
        { authorId: "1906449", name: "Avneesh Sud" },
        { authorId: "8707513", name: "Aaron Sarna" },
        { authorId: "1807080", name: "T. Funkhouser" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "ffb3b8542c2caa3b9a9bb4d338e6a38408808d8d",
      title: "Deep Structured Implicit Functions",
      url:
        "https://www.semanticscholar.org/paper/ffb3b8542c2caa3b9a9bb4d338e6a38408808d8d",
      venue: "ArXiv",
      year: 2019,
    },
    {
      arxivId: "1912.03310",
      authors: [
        { authorId: "2897313", name: "Nitish Srivastava" },
        { authorId: "39538991", name: "H. Goh" },
        { authorId: "145124475", name: "R. Salakhutdinov" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "ebbf57ef4a7ec094da70ea768e1483d754e96957",
      title: "Geometric Capsule Autoencoders for 3D Point Clouds",
      url:
        "https://www.semanticscholar.org/paper/ebbf57ef4a7ec094da70ea768e1483d754e96957",
      venue: "ArXiv",
      year: 2019,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "1768513", name: "Y. Yang" },
        { authorId: "144066717", name: "Chen Feng" },
        { authorId: "2577784", name: "Y. Shen" },
        { authorId: "144309297", name: "Dong Tian" },
      ],
      doi: "10.1109/CVPR.2018.00029",
      intent: [],
      isInfluential: false,
      paperId: "572a5aa00f0569887469ffb7554699c21156ba0b",
      title: "FoldingNet: Point Cloud Auto-Encoder via Deep Grid Deformation",
      url:
        "https://www.semanticscholar.org/paper/572a5aa00f0569887469ffb7554699c21156ba0b",
      venue:
        "2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      year: 2018,
    },
    {
      arxivId: "1904.06447",
      authors: [
        { authorId: "32627314", name: "Kyle Genova" },
        { authorId: "39578349", name: "F. Cole" },
        { authorId: "1880628", name: "D. Vlasic" },
        { authorId: "8707513", name: "Aaron Sarna" },
        { authorId: "1768236", name: "W. Freeman" },
        { authorId: "1807080", name: "T. Funkhouser" },
      ],
      doi: "10.1109/ICCV.2019.00725",
      intent: [],
      isInfluential: false,
      paperId: "a937a8061710c5dcc9111f4f150c528c1706b649",
      title: "Learning Shape Templates With Structured Implicit Functions",
      url:
        "https://www.semanticscholar.org/paper/a937a8061710c5dcc9111f4f150c528c1706b649",
      venue: "2019 IEEE/CVF International Conference on Computer Vision (ICCV)",
      year: 2019,
    },
    {
      arxivId: null,
      authors: [
        { authorId: null, name: "Peng-Shuai Wang" },
        { authorId: null, name: "Chun-Yu Sun" },
        { authorId: null, name: "Yang Liu" },
        { authorId: null, name: "Xin Tong" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title:
        "Octree - Based Convolutional Neural Networks for 3 d Shape Analysis",
      url: "",
      venue: "ACM Transactions on Graphics",
      year: null,
    },
    {
      arxivId: "1409.1556",
      authors: [
        { authorId: "34838386", name: "K. Simonyan" },
        { authorId: "1688869", name: "Andrew Zisserman" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "eb42cf88027de515750f230b23b1a057dc782108",
      title:
        "Very Deep Convolutional Networks for Large-Scale Image Recognition",
      url:
        "https://www.semanticscholar.org/paper/eb42cf88027de515750f230b23b1a057dc782108",
      venue: "ICLR",
      year: 2015,
    },
    {
      arxivId: null,
      authors: [{ authorId: "1695689", name: "Geoffrey E. Hinton" }],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "5b87030ad4ef55fa7c563938217d87b840c2a158",
      title:
        "A Parallel Computation that Assigns Canonical Object-Based Frames of Reference",
      url:
        "https://www.semanticscholar.org/paper/5b87030ad4ef55fa7c563938217d87b840c2a158",
      venue: "IJCAI",
      year: 1981,
    },
    {
      arxivId: "1912.03207",
      authors: [
        { authorId: "2422713", name: "Timothy Jeruzalski" },
        { authorId: "22257166", name: "Boyang Deng" },
        { authorId: "144739074", name: "Mohammad Norouzi" },
        { authorId: "153024897", name: "J. P. Lewis" },
        { authorId: "38850910", name: "G. Hinton" },
        { authorId: "1796480", name: "A. Tagliasacchi" },
      ],
      doi: "10.1007/978-3-030-58571-6_36",
      intent: [],
      isInfluential: false,
      paperId: "4908a69a7c22cc63821dcea49f4b4551e22899a5",
      title: "NASA: Neural Articulated Shape Approximation",
      url:
        "https://www.semanticscholar.org/paper/4908a69a7c22cc63821dcea49f4b4551e22899a5",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "1710.09829",
      authors: [
        { authorId: "143752292", name: "Sara Sabour" },
        { authorId: "27737461", name: "Nicholas Frosst" },
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "c4c06578f4870e4b126e6837907929f3c900b99f",
      title: "Dynamic Routing Between Capsules",
      url:
        "https://www.semanticscholar.org/paper/c4c06578f4870e4b126e6837907929f3c900b99f",
      venue: "NIPS",
      year: 2017,
    },
    {
      arxivId: null,
      authors: [{ authorId: null, name: "Karen Simonyan" }],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title: "namic Routing Between Capsules",
      url: "",
      venue: "Advances in Neural Information Processing Systems",
      year: null,
    },
    {
      arxivId: null,
      authors: [
        { authorId: null, name: "Xinchen Yan" },
        { authorId: null, name: "Jimei Yang" },
        { authorId: null, name: "Ersin Yumer" },
        { authorId: null, name: "Yijie Guo" },
        { authorId: null, name: "Honglak Lee" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title:
        "Guibas , and Or Litany . PointContrast : Unsupervised Pre - training for 3 D Point Cloud Understanding",
      url: "",
      venue: "European Conference on Computer Vision",
      year: null,
    },
    {
      arxivId: "2003.07619",
      authors: [
        { authorId: "1410303723", name: "Clara Fernandez-Labrador" },
        { authorId: "2572459", name: "Ajad Chhatkuli" },
        { authorId: "35268081", name: "D. Paudel" },
        { authorId: "145317251", name: "J. B. Guerrero" },
        { authorId: "2573908", name: "C. Demonceaux" },
        { authorId: "1681236", name: "L. Gool" },
      ],
      doi: "10.1007/978-3-030-58595-2_33",
      intent: [],
      isInfluential: false,
      paperId: "aeb9c8b875e20b5ce456f06948143cf70098d458",
      title:
        "Unsupervised Learning of Category-Specific Symmetric 3D Keypoints from Point Sets",
      url:
        "https://www.semanticscholar.org/paper/aeb9c8b875e20b5ce456f06948143cf70098d458",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "1906.02829",
      authors: [
        { authorId: "47748857", name: "Wei Zhao" },
        { authorId: "10761233", name: "Haiyun Peng" },
        { authorId: "2620186", name: "Steffen Eger" },
        { authorId: "49943757", name: "E. Cambria" },
        { authorId: "144346837", name: "Min Yang" },
      ],
      doi: "10.18653/v1/P19-1150",
      intent: [],
      isInfluential: false,
      paperId: "8e93a072ac0324a7d012fbba6aa314d5b4b59b64",
      title:
        "Towards Scalable and Reliable Capsule Networks for Challenging NLP Applications",
      url:
        "https://www.semanticscholar.org/paper/8e93a072ac0324a7d012fbba6aa314d5b4b59b64",
      venue: "ACL",
      year: 2019,
    },
    {
      arxivId: "1412.6980",
      authors: [
        { authorId: "1726807", name: "Diederik P. Kingma" },
        { authorId: "2503659", name: "Jimmy Ba" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "a6cb366736791bcccc5c8639de5a8f9636bf87e8",
      title: "Adam: A Method for Stochastic Optimization",
      url:
        "https://www.semanticscholar.org/paper/a6cb366736791bcccc5c8639de5a8f9636bf87e8",
      venue: "ICLR",
      year: 2015,
    },
    {
      arxivId: "1612.00593",
      authors: [
        { authorId: "144329939", name: "C. R. Qi" },
        { authorId: "144914140", name: "H. Su" },
        { authorId: "2216377", name: "Kaichun Mo" },
        { authorId: "1744254", name: "L. Guibas" },
      ],
      doi: "10.1109/CVPR.2017.16",
      intent: [],
      isInfluential: false,
      paperId: "d997beefc0922d97202789d2ac307c55c2c52fba",
      title:
        "PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation",
      url:
        "https://www.semanticscholar.org/paper/d997beefc0922d97202789d2ac307c55c2c52fba",
      venue:
        "2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2017,
    },
    {
      arxivId: "1812.10775",
      authors: [
        { authorId: "1760004", name: "Y. Zhao" },
        { authorId: "2355828", name: "Tolga Birdal" },
        { authorId: "10274707", name: "Haowen Deng" },
        { authorId: "2266326", name: "Federico Tombari" },
      ],
      doi: "10.1109/CVPR.2019.00110",
      intent: [],
      isInfluential: false,
      paperId: "29c05c8a2f24ddf9572019b396801ad9bb21e884",
      title: "3D Point Capsule Networks",
      url:
        "https://www.semanticscholar.org/paper/29c05c8a2f24ddf9572019b396801ad9bb21e884",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: "1802.10200",
      authors: [
        { authorId: "3471218", name: "Parnian Afshar" },
        { authorId: "1725399", name: "Arash Mohammadi" },
        { authorId: "1705037", name: "K. Plataniotis" },
      ],
      doi: "10.1109/ICIP.2018.8451379",
      intent: [],
      isInfluential: false,
      paperId: "b1328df3c0d1262d500ed734f8bf977094c3b087",
      title: "Brain Tumor Type Classification via Capsule Networks",
      url:
        "https://www.semanticscholar.org/paper/b1328df3c0d1262d500ed734f8bf977094c3b087",
      venue:
        "2018 25th IEEE International Conference on Image Processing (ICIP)",
      year: 2018,
    },
    {
      arxivId: "2008.02792",
      authors: [
        { authorId: "40084473", name: "Davis Rempe" },
        { authorId: "2355828", name: "Tolga Birdal" },
        { authorId: "1760004", name: "Y. Zhao" },
        { authorId: "51950738", name: "Zan Gojcic" },
        { authorId: "143627559", name: "S. Sridhar" },
        { authorId: "1744254", name: "L. Guibas" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "d848a13687f495350b11562f899c19e0ce3795b1",
      title:
        "CaSPR: Learning Canonical Spatiotemporal Point Cloud Representations",
      url:
        "https://www.semanticscholar.org/paper/d848a13687f495350b11562f899c19e0ce3795b1",
      venue: "NeurIPS",
      year: 2020,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "2848320", name: "Dilin Wang" },
        { authorId: "47362455", name: "Q. Liu" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "3de4ee486c3c62408ae302a9659ffa7f02562f45",
      title: "An Optimization View on Dynamic Routing Between Capsules",
      url:
        "https://www.semanticscholar.org/paper/3de4ee486c3c62408ae302a9659ffa7f02562f45",
      venue: "ICLR",
      year: 2018,
    },
    {
      arxivId: null,
      authors: [{ authorId: "1739434", name: "J. Arvo" }],
      doi: "10.1016/B978-0-08-050755-2.50034-8",
      intent: [],
      isInfluential: false,
      paperId: "04f3beeee1ce89b9adf17a6fabde1221a328dbad",
      title: "Fast Random Rotation matrices",
      url:
        "https://www.semanticscholar.org/paper/04f3beeee1ce89b9adf17a6fabde1221a328dbad",
      venue: "Graphics Gems III",
      year: 1992,
    },
    {
      arxivId: "1911.06971",
      authors: [
        { authorId: "2406577", name: "Zhiqin Chen" },
        { authorId: "1796480", name: "A. Tagliasacchi" },
        { authorId: "153504695", name: "Hao Zhang" },
      ],
      doi: "10.1109/CVPR42600.2020.00012",
      intent: [],
      isInfluential: false,
      paperId: "c397b92c9c89f781d667354af718f4a14e5f330c",
      title: "BSP-Net: Generating Compact Meshes via Binary Space Partitioning",
      url:
        "https://www.semanticscholar.org/paper/c397b92c9c89f781d667354af718f4a14e5f330c",
      venue:
        "2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2020,
    },
    {
      arxivId: "2008.09088",
      authors: [
        { authorId: "46421692", name: "Wentao Yuan" },
        { authorId: "1887795098", name: "Ben Eckart" },
        { authorId: "3736059", name: "Kihwan Kim" },
        { authorId: "2745026", name: "V. Jampani" },
        { authorId: "145197953", name: "D. Fox" },
        { authorId: "1690538", name: "J. Kautz" },
      ],
      doi: "10.1007/978-3-030-58558-7_43",
      intent: [],
      isInfluential: false,
      paperId: "4a05b2b8de6ebf305457b3bfc1ae8d13b4db37a6",
      title:
        "DeepGMR: Learning Latent Gaussian Mixture Models for Registration",
      url:
        "https://www.semanticscholar.org/paper/4a05b2b8de6ebf305457b3bfc1ae8d13b4db37a6",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "2002.05709",
      authors: [
        { authorId: "145358498", name: "Ting Chen" },
        { authorId: "40464924", name: "Simon Kornblith" },
        { authorId: "144739074", name: "Mohammad Norouzi" },
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "34733eaf66007516347a40ad5d9bbe1cc9dacb6b",
      title:
        "A Simple Framework for Contrastive Learning of Visual Representations",
      url:
        "https://www.semanticscholar.org/paper/34733eaf66007516347a40ad5d9bbe1cc9dacb6b",
      venue: "ICML",
      year: 2020,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "1685089", name: "Pedro F. Felzenszwalb" },
        { authorId: "145689002", name: "David A. McAllester" },
        { authorId: "1770537", name: "D. Ramanan" },
      ],
      doi: "10.1109/CVPR.2008.4587597",
      intent: [],
      isInfluential: false,
      paperId: "860a9d55d87663ca88e74b3ca357396cd51733d0",
      title: "A discriminatively trained, multiscale, deformable part model",
      url:
        "https://www.semanticscholar.org/paper/860a9d55d87663ca88e74b3ca357396cd51733d0",
      venue: "2008 IEEE Conference on Computer Vision and Pattern Recognition",
      year: 2008,
    },
    {
      arxivId: "2010.07021",
      authors: [
        { authorId: "49152624", name: "Zhantao Deng" },
        { authorId: "30799127", name: "Jan Bednar\u00edk" },
        { authorId: "2862871", name: "M. Salzmann" },
        { authorId: "153918727", name: "P. Fua" },
      ],
      doi: "10.1109/3DV50981.2020.00069",
      intent: [],
      isInfluential: false,
      paperId: "132afe66c15ffeaf7d7f7c7265e7f8a5711220e0",
      title: "Better Patch Stitching for Parametric Surface Reconstruction",
      url:
        "https://www.semanticscholar.org/paper/132afe66c15ffeaf7d7f7c7265e7f8a5711220e0",
      venue: "2020 International Conference on 3D Vision (3DV)",
      year: 2020,
    },
    {
      arxivId: null,
      authors: [
        { authorId: null, name: "Olga Sorkine" },
        { authorId: null, name: "- Hornung" },
        { authorId: null, name: "Michael Rabinovich" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title: "Least-Squares Rigid Motion Using SVD. Computing",
      url: "",
      venue: "",
      year: 2017,
    },
    {
      arxivId: "1901.05103",
      authors: [
        { authorId: "8289312", name: "Jeong Joon Park" },
        { authorId: "143606342", name: "P. Florence" },
        { authorId: "20128275", name: "J. Straub" },
        { authorId: "50366818", name: "Richard A. Newcombe" },
        { authorId: "3289186", name: "S. Lovegrove" },
      ],
      doi: "10.1109/CVPR.2019.00025",
      intent: [],
      isInfluential: false,
      paperId: "dd81523b9accdf1c13cd37f76b22ab27d84b7a42",
      title:
        "DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation",
      url:
        "https://www.semanticscholar.org/paper/dd81523b9accdf1c13cd37f76b22ab27d84b7a42",
      venue:
        "2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2019,
    },
    {
      arxivId: "1712.00268",
      authors: [
        { authorId: "2528439", name: "O. Litany" },
        { authorId: "49791556", name: "A. Bronstein" },
        { authorId: "1732570", name: "M. Bronstein" },
        { authorId: "2159982", name: "A. Makadia" },
      ],
      doi: "10.1109/CVPR.2018.00202",
      intent: [],
      isInfluential: false,
      paperId: "66bc2f209dfa9b547b0523311dd69f8aaafda971",
      title:
        "Deformable Shape Completion with Graph Convolutional Autoencoders",
      url:
        "https://www.semanticscholar.org/paper/66bc2f209dfa9b547b0523311dd69f8aaafda971",
      venue:
        "2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition",
      year: 2018,
    },
    {
      arxivId: "1912.12098",
      authors: [
        { authorId: "1760004", name: "Y. Zhao" },
        { authorId: "2355828", name: "Tolga Birdal" },
        { authorId: "9572099", name: "J. E. Lenssen" },
        { authorId: "34978531", name: "E. Menegatti" },
        { authorId: "1744254", name: "L. Guibas" },
        { authorId: "2266326", name: "Federico Tombari" },
      ],
      doi: "10.1007/978-3-030-58452-8_1",
      intent: [],
      isInfluential: false,
      paperId: "4ea814b1c76995e445ccf0621b0e775ff53a1db6",
      title: "Quaternion Equivariant Capsule Networks for 3D Point Clouds",
      url:
        "https://www.semanticscholar.org/paper/4ea814b1c76995e445ccf0621b0e775ff53a1db6",
      venue: "ECCV",
      year: 2020,
    },
    {
      arxivId: "1708.05375",
      authors: [
        { authorId: "145579476", name: "Abhishek Kar" },
        { authorId: "2172959", name: "Christian H\u00e4ne" },
        { authorId: "143751119", name: "Jitendra Malik" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "61ce67533d2dd6605c907146658ccdbc4778a5d8",
      title: "Learning a Multi-View Stereo Machine",
      url:
        "https://www.semanticscholar.org/paper/61ce67533d2dd6605c907146658ccdbc4778a5d8",
      venue: "NIPS",
      year: 2017,
    },
    {
      arxivId: null,
      authors: [
        { authorId: null, name: "Kai Oliver Van Kaick" },
        { authorId: null, name: "Hao Xu" },
        { authorId: null, name: "Yanzhen Zhang" },
        { authorId: null, name: "Wang" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "",
      title:
        "Shuyang Sun, Ariel Shamir, and Daniel Cohen-Or. Cohierarchical analysis of shape structures",
      url: "",
      venue: "",
      year: 2013,
    },
    {
      arxivId: null,
      authors: [
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
        { authorId: "49464494", name: "K. Lang" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "6b88f41738085c1a2bffe6123541755b1118e5e2",
      title: "Shape Recognition and Illusory Conjunctions",
      url:
        "https://www.semanticscholar.org/paper/6b88f41738085c1a2bffe6123541755b1118e5e2",
      venue: "IJCAI",
      year: 1985,
    },
    {
      arxivId: "1906.06818",
      authors: [
        { authorId: "7497792", name: "Adam R. Kosiorek" },
        { authorId: "143752292", name: "Sara Sabour" },
        { authorId: "1725303", name: "Y. Teh" },
        { authorId: "1695689", name: "Geoffrey E. Hinton" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "46c53faeaf2f52215adb165559c5ce056a71146b",
      title: "Stacked Capsule Autoencoders",
      url:
        "https://www.semanticscholar.org/paper/46c53faeaf2f52215adb165559c5ce056a71146b",
      venue: "NeurIPS",
      year: 2019,
    },
    {
      arxivId: "1612.00603",
      authors: [
        { authorId: "1934546", name: "Haoqiang Fan" },
        { authorId: "71309570", name: "H. Su" },
        { authorId: "1744254", name: "L. Guibas" },
      ],
      doi: "10.1109/CVPR.2017.264",
      intent: [],
      isInfluential: false,
      paperId: "41d08fb733f3e50ac183490f84d6377dffccf350",
      title:
        "A Point Set Generation Network for 3D Object Reconstruction from a Single Image",
      url:
        "https://www.semanticscholar.org/paper/41d08fb733f3e50ac183490f84d6377dffccf350",
      venue:
        "2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2017,
    },
    {
      arxivId: "1612.00814",
      authors: [
        { authorId: "3084614", name: "Xinchen Yan" },
        { authorId: "1768964", name: "Jimei Yang" },
        { authorId: "8020964", name: "Ersin Yumer" },
        { authorId: "1857914", name: "Yijie Guo" },
        { authorId: "1697141", name: "H. Lee" },
      ],
      doi: null,
      intent: [],
      isInfluential: false,
      paperId: "e7fc323c25cf6c0cda83cf639cd5180371019397",
      title:
        "Perspective Transformer Nets: Learning Single-View 3D Object Reconstruction without 3D Supervision",
      url:
        "https://www.semanticscholar.org/paper/e7fc323c25cf6c0cda83cf639cd5180371019397",
      venue: "NIPS",
      year: 2016,
    },
    {
      arxivId: "1804.01654",
      authors: [
        { authorId: "41017759", name: "Nanyang Wang" },
        { authorId: "2507239", name: "Y. Zhang" },
        { authorId: "3119455", name: "Zhuwen Li" },
        { authorId: "35782003", name: "Yanwei Fu" },
        { authorId: "46641573", name: "W. Liu" },
        { authorId: "1717861", name: "Yu-Gang Jiang" },
      ],
      doi: "10.1007/978-3-030-01252-6_4",
      intent: [],
      isInfluential: false,
      paperId: "3aa21de1a7c97e0458e10ed5730ce160bb436caa",
      title: "Pixel2Mesh: Generating 3D Mesh Models from Single RGB Images",
      url:
        "https://www.semanticscholar.org/paper/3aa21de1a7c97e0458e10ed5730ce160bb436caa",
      venue: "ECCV",
      year: 2018,
    },
    {
      arxivId: "1502.03167",
      authors: [
        { authorId: "144147316", name: "S. Ioffe" },
        { authorId: "2574060", name: "Christian Szegedy" },
      ],
      doi: null,
      intent: ["methodology"],
      isInfluential: false,
      paperId: "4d376d6978dad0374edfa6709c9556b42d3594d3",
      title:
        "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
      url:
        "https://www.semanticscholar.org/paper/4d376d6978dad0374edfa6709c9556b42d3594d3",
      venue: "ICML",
      year: 2015,
    },
  ],
  title: "Canonical Capsules: Unsupervised Capsules in Canonical Pose",
  topics: [],
  url:
    "https://www.semanticscholar.org/paper/16fd3bcea628a20d273c35d40447fba3b3aa4774",
  venue: "ArXiv",
  year: 2020,
};

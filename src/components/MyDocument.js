import React from "react";
// import { Button as SBtn, Icon } from "semantic-ui-react";
// import { PDFDownloadLink, Page, Text, View, Document } from "react-pdf";
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const MyDoc = () => (
  <Document>
    <Page wrap={false}>
      <View>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

const MyDocument = () => {
  return (
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download"

      }
    </PDFDownloadLink>
  );
};
export default MyDocument;

// export class MyDcument extends React.Component {

//   render() {
//       console.log("###test")
//     const MyDoc = () => (
//       <Document>
//        <Page>
//           <View>
//             <Text>Section #1</Text>
//           </View>
//         </Page>
//       </Document>
//     );

//    return (
//       <div >
//         <div>
//           <PDFDownloadLink document={<MyDoc/>} fileName="somename.pdf">
//             {({ blob, url, loading, error }) =>
//               loading ? "Loading document..." : 

//               <Tooltip title="Download Blank Questionnaire">
//                   <SBtn
//                     className="add-new-quest-btn"
//                   >
//                     <Icon.Group>
//                       <Icon className="file-icon" name="file pdf" />
//                       <Icon
//                         corner
//                         name="arrow alternate circle down"
//                         className="down-icon"
//                       />
//                     </Icon.Group>
//                   </SBtn>
//             </Tooltip>

//             }
//           </PDFDownloadLink>
//         </div>
//       </div>
//     );
//   }
// }
// export MyDcument;
	var trace1 = { //For first visualization
	  x: [870, 1, 100, 850, 800, 3, 850, 1, 10],
	  y: [1, 2, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8],
	  z: [1.6, 0.02, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09],
	  mode: 'markers',
	  name: "negative",
	  marker: {
	    size: 12,
	    line: {
	      color: 'rgba(217, 217, 217, 0.14)',
	      width: 0.5
	    },
	    opacity: 0.8
	  },
	  type: 'scatter3d'
	};

	var trace2 = { //For first visualization
	  x: [0.001, 0.005, 0.007, 0.03, 1, 0.001, 0.005],
	  y: [0.01, 11, 0.1, 0.03, 1, 14, 10],
	  z: [0.007, 10, 0.001, 0.001, 0.1, 10, 40],
	  mode: 'markers',
	  name: "postive",
	  marker: {
	    size: 12,
	    line: {
	      color: 'rgba(90, 90, 90, 0.14)',
	      width: 0.5
	    },
	    opacity: 0.8
	  },
	  type: 'scatter3d'
	};

	var data1 = [trace1, trace2]; //For first visualization

	var layout1 = //For first visualization
		{"height":650,
		 "width":1044,
		 "yaxis":{},
		 "title":"Antibiotic Minimum Inhibitory Concentration",
		 "scene":{
		 	 "aspectratio":{
		 	 	"y":1,
		 	 	"x":1,
		 	 	"z":1
		 	 },
			 "camera":{
				 "up":{"x":0,"y":0,"z":1},
				 "center":{
				 	"x":0,
				 	"y":0,
				 	"z":0},
				 "eye":{
				 	"x":-1.5837559942802037,
				 	"y":-1.4704976043087836,
				 	"z":0.12982197927797698
				 }
			 },
			 "zaxis":{
			 	  "type":"log",
			 	  "autorange":true,
			 	  "title":"Neomycin (z)"
			 },
			 "xaxis":{
			 	  "type":"log",
			 	  "autorange":true,
			 	  "title":"Penicilin (x)"
			 },
			 "yaxis":{
			 	  "type":"log",
			 	  "autorange":true,
			 	  "title":"Streptomycin (y)"
			 }
		 },
		 "xaxis":{},
		 "barmode":"group"
	};

	var trace3 = { //For second visualization
	  x: ['Aerobacter aerogenes', 'Brucella abortus', 'Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
	  y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
	  name: 'Penicilin',
	  marker: {
      color: '#9d4cff',
    	opacity: 0.6
      },
	  type: 'bar'
	};

	var trace4 = { //For second visualization
	  x: ['Aerobacter aerogenes', 'Brucella abortus', 'Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
	  y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
	  name: 'Streptomycin',
	  marker: {
    	color: '#fffc4c',
    	opacity: 0.6
      },
	  type: 'bar'
	};

	var trace5 = { //For second visualization
	  x: ['Aerobacter aerogenes', 'Brucella abortus', 'Brucella anthracis', 'Diplococcus pneumoniae', 'Escherichia coli', 'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa', 'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus', 'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'],
	  y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
	  name: 'Neomycin',
	  marker: {
          color: '#ffa34c',
    	    opacity: 0.6
      },
	  type: 'bar'
	};

	var data2 = [trace3, trace4, trace5]; //For second visualization
	
	var layout2 = {"yaxis":{"type":"log", //For second visualization
		"range":[-3.6770061833216863,2.6437669461812168],
		"autorange":false,
		"rangemode":"tozero",
		"title":"Minimum Inhibitory Concentration (MIC)"},
		"xaxis":{"type":"category",
		"range":[2.5411820675282875,17.86550869963965],
		"autorange":false,
		"tickangle":20},
		"barmode":"group",
		"height":650,
		"width":1044,
		"autosize":false,
		"title":"Ranking Minimum Inhibitory Concentrations of Bacterial Infections","dragmode":"pan"};

var allLabels = ['Penicilin', 'Streptomycin', 'Neomycin']; //For third visualization

var allValues = [ //For third visualization
  [870,	1,	1.6],
  [1,	2,	0.02],
  [0.001,	0.01,	0.007],
  [0.005,	11,	10],
  [100,	0.4, 0.1],
  [850,	1.2,	1],
  [800,	5,	2],
  [3,	0.1,	0.1],
  [850,	2,	0.4],
  [1,	0.4,	0.008],
  [10,	0.8,	0.09],
  [0.007,	0.1,	0.001],
  [0.03,	0.03,	0.001],
  [1,	1,	0.1],
  [0.001,	14,	10],
  [0.005,	10,	40]
];

var ultimateColors = [ //For third visualization
  ['#9d4cff', '#fffc4c', '#ffa34c']
];

var data3 = [{ //For third visualization
  values: allValues[0],
  labels: allLabels,
  type: 'pie',
  name: 'Aerobacter aerogenes',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0, .24],
    y: [0, .24]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[1],
  labels: allLabels,
  type: 'pie',
  name: 'Brucella abortus',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0, 0.24],
    y: [0.26, 0.5]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[2],
  labels: allLabels,
  type: 'pie',
  name: 'Brucella anthracis',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0, 0.24],
    y: [0.51, 0.75]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[3],
  labels: allLabels,
  type: 'pie',
  name: 'Diplococcus pneumoniae',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0, 0.24],
    y: [0.76, 1]
  },
  hoverinfo: 'value+name',
  textinfo: 'none'
},{
  values: allValues[4],
  labels: allLabels,
  type: 'pie',
  name: 'Escherichia coli',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.26, .5],
    y: [0, .24]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[5],
  labels: allLabels,
  type: 'pie',
  name: 'Klebsiella pneumoniae',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.26, 0.5],
    y: [0.26, 0.5]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[6],
  labels: allLabels,
  type: 'pie',
  name: 'Mycobacterium tuberculosis',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.26, 0.5],
    y: [.51, 0.74]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[7],
  labels: allLabels,
  type: 'pie',
  name: 'Proteus vulgaris',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.26, 0.5],
    y: [.76, 1]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[8],
  labels: allLabels,
  type: 'pie',
  name: 'Pseudomonas aeruginosa',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.51, 0.75],
    y: [0, 0.24]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[9],
  labels: allLabels,
  type: 'pie',
  name: 'Salmonella (Eberthella) typhosa',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.51, 0.75],
    y: [.26, 0.5]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[10],
  labels: allLabels,
  type: 'pie',
  name: 'Salmonella schottmuelleri',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.51, 0.75],
    y: [0.51, 0.75]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[11],
  labels: allLabels,
  type: 'pie',
  name: 'Staphylococcus albus',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [0.51, 0.75],
    y: [.76, 1]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[12],
  labels: allLabels,
  type: 'pie',
  name: 'Staphylococcus aureus',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [.76, 1],
    y: [0, 0.24]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[13],
  labels: allLabels,
  type: 'pie',
  name: 'Streptococcus fecalis',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [.76, 1],
    y: [0.26, 0.5]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[14],
  labels: allLabels,
  type: 'pie',
  name: 'Streptococcus hemolyticus',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [.76, 1],
    y: [0.51, 0.75]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
},{
  values: allValues[15],
  labels: allLabels,
  type: 'pie',
  name: 'Streptococcus viridans',
  marker: {
    colors: ultimateColors[0]
  },
  domain: {
    x: [.76, 1],
    y: [.76, 1]
  },
  hoverinfo: 'label+value+name',
  textinfo: 'none'
}];

var layout3 = { //For third visualization
  height: 800,
  width: 1200,
  title: 'Minimum Inhibitory Concentrations of Various Antibiotics'
};

Plotly.newPlot('First', data1, layout1); //Data wouldn't render when I used staticPlot
Plotly.newPlot('Second', data2, layout2, {staticPlot: true});
Plotly.newPlot('Third', data3, layout3, {staticPlot: true});


  /* Didn't end up using this, inputing the data on my own helped me figure out the structure

  $.get('./antibiotics_data.csv', function(data) {
      Papa.parse(data, {
        complete: function(results) {
          console.log("Finished:", results.data);
        }
      });
  });*/
